using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.DTOs;
using backend.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using MySql.Data.MySqlClient;

public class AssessmentRepository : IAssessmentRepository
{

    private readonly AppDbContext _context;
    
    public AssessmentRepository(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<List<UpcomingAssessmentDto>> GetAllUpcomingAssessments(long userId, DateTime fromDate, DateTime toDate)
    {
        Console.WriteLine($"UserId: {userId}, FromDate: {fromDate}, ToDate: {toDate}");
        toDate = toDate.Date.AddDays(1).AddSeconds(-1);

        var data = await (
            from a in _context.Assessments

            join t in _context.Tests
                on a.TestId equals t.Id into at
            from t in at.DefaultIfEmpty()

            join s in _context.PersonalInformations
                on a.StudentId equals s.UserId into st
            from s in st.DefaultIfEmpty()

            join c in _context.PersonalInformations
                on a.AssignedBy equals c.UserId into ct
            from c in ct.DefaultIfEmpty()

            join ur in _context.UserRoles
                on a.StudentId equals ur.UserId into urt
            from ur in urt.DefaultIfEmpty()

            join r in _context.Roles
                on ur.RoleId equals r.RoleId into rt
            from r in rt
                .Where(x => x.RoleName.ToLower() == "student")
                .DefaultIfEmpty()

            where a.StudentId == userId
            && a.Status.ToString() == "Assigned"
            && a.ScheduledAt >= fromDate
            && a.ScheduledAt <= toDate

            orderby a.ScheduledAt ascending

            select new UpcomingAssessmentDto
            {
                SrNo = 0,
                AssessmentId = (int)a.Id,
                AssessmentName = t != null ? t.Title : null,
                ScheduledAt = a.ScheduledAt,
                Duration = t != null ? t.Duration : null,
                Status = a.Status.ToString()
            }
        ).ToListAsync();

        for (int i = 0; i < data.Count; i++)
        {
            data[i].SrNo = i + 1;
        }

        return data;
    }

    public async Task<List<AllAssessmentDto>> GetAllAssessments()
    {
        var data = await (
            from a in _context.Assessments

            join t in _context.Tests on a.TestId equals t.Id into testGroup
            from t in testGroup.DefaultIfEmpty()

            join u in _context.Users on a.StudentId equals u.Id into userGroup
            from u in userGroup.DefaultIfEmpty()

            join p in _context.PersonalInformations on u.Id equals p.UserId into personalGroup
            from p in personalGroup.DefaultIfEmpty()

            select new AllAssessmentDto
            {
                Id = a.Id,
                AssessmentTitle = t != null ? t.Title : "N/A",
                FullName = p != null ? p.FirstName : "N/A",
                DifficultyLevel = t != null ? t.Difficulty : "N/A",
                Status = a.Status,
                IsActive = a.IsActive
            }
        ).ToListAsync();

        for (int i = 0; i < data.Count; i++)
        {
            data[i].SrNo = i + 1;
        }

        return data;
    }

    public async Task<bool> DeactivateAssessment(long id)
    {
        var assessment = await _context.Assessments.FindAsync(id);

        if (assessment == null)
            return false;

        if (!assessment.IsActive)
            return true;

        assessment.IsActive = false;

        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<int> CancelAssessmentsByTestId(long testId)
    {
        var testExists = await _context.Tests.AnyAsync(t => t.Id == testId);

        if (!testExists)
            return 0;

        var testRowsAffected = await _context.Database.ExecuteSqlInterpolatedAsync($@"
            UPDATE tests
            SET status = 0
            WHERE id = {testId}");

        var assessmentRowsAffected = await _context.Database.ExecuteSqlInterpolatedAsync($@"
            UPDATE assessments
            SET status = 'Cancelled',
                is_active = 0
            WHERE test_id = {testId}
              AND is_active = 1
              AND status <> 'Completed'");

        return Math.Max(1, testRowsAffected + assessmentRowsAffected);
    }

    public async Task<bool> RestoreAssessment(long id)
    {
        var assessment = await _context.Assessments.FindAsync(id);

        if (assessment == null)
            return false;

        if (assessment.IsActive)
            return true;

        assessment.IsActive = true;

        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<List<TestDto>> GetTestsAsync()
    {
        return await _context.Tests
            .Select(t => new TestDto
            {
                Id = t.Id,
                Title = t.Title,
                Duration = (int?)t.Duration,
                Description = t.Description,
                Difficulty = t.Difficulty
            })
            .ToListAsync();
    }

    public async Task<List<StudentDto>> GetStudentsAsync()
    {
        return await (from u in _context.Users
                      join p in _context.PersonalInformations
                      on u.Id equals p.UserId
                      select new StudentDto
                      {
                          Id = (int)u.Id,
                          FullName = p.FullName ?? string.Empty
                      }).ToListAsync();
    }

    public async Task<AssignAssessmentResultDto> AssignAssessmentAsync(AssignAssessmentDto dto)
    {
        // ✅ Validation
        if (dto.StudentIds == null || !dto.StudentIds.Any())
            throw new Exception("StudentIds is empty");

        if (dto.TestId == 0)
            throw new Exception("Invalid TestId");

        var validStatuses = new[] { "Pending", "Assigned", "Completed", "Cancelled" };

        if (!string.IsNullOrEmpty(dto.Status) && !validStatuses.Contains(dto.Status))
            throw new Exception("Invalid status");

        // ✅ Check which students already have this test assigned
        var alreadyAssignedStudentIds = await _context.Assessments
            .Where(a => a.TestId == dto.TestId
                    && dto.StudentIds.Contains((long)a.StudentId))
            .Select(a => a.StudentId)
            .ToListAsync();

        // ✅ Only assign students who don't already have it
        var newStudentIds = dto.StudentIds
            .Where(id => !alreadyAssignedStudentIds.Contains(id))
            .ToList();

        // ✅ If ALL students are already assigned, return early with message
        if (!newStudentIds.Any())
        {
            return new AssignAssessmentResultDto
            {
                Success = false,
                Message = "This test is already assigned to all selected students."
            };
        }

        // ✅ Insert only new assignments
        var assessments = newStudentIds.Select(studentId => new Assessment
        {
            TestId      = dto.TestId,
            StudentId   = studentId,
            AssignedBy  = 1,
            AssignedAt  = DateTime.Now,
            ScheduledAt = dto.ScheduledAt,
            Status      = dto.Status ?? "Assigned"
        }).ToList();

        await _context.Assessments.AddRangeAsync(assessments);
        await _context.SaveChangesAsync();

        // ✅ Build informative message
        var skippedCount = alreadyAssignedStudentIds.Count;
        var assignedCount = newStudentIds.Count;

        var message = skippedCount > 0
            ? $"Assigned to {assignedCount} student(s). Skipped {skippedCount} already assigned."
            : $"Assessment assigned to {assignedCount} student(s) successfully.";

        return new AssignAssessmentResultDto
        {
            Success = true,
            Message = message,
            AssignedCount = assignedCount,
            SkippedCount  = skippedCount
        };
    }

    public async Task<List<AssessmentQuestionDto>> GetAssessmentQuestionsAsync(int assessmentId)
    {
        return await _context.Set<AssessmentQuestionDto>()
            .FromSqlInterpolated($@"
                SELECT
                    ques.question_id        AS QuestionId,
                    ques.description        AS Description,
                    ques.question_type      AS QuestionType,
                    MAX(mcq.option_a)       AS OptionA,
                    MAX(mcq.option_b)       AS OptionB,
                    MAX(mcq.option_c)       AS OptionC,
                    MAX(mcq.option_d)       AS OptionD
                FROM assessments AS asm
                INNER JOIN tests AS tst
                    ON asm.test_id = tst.id
                INNER JOIN test_questions AS testQues
                    ON testQues.test_id = tst.id
                INNER JOIN questions AS ques
                    ON ques.question_id = testQues.question_id
                INNER JOIN mcq_options AS mcq
                    ON mcq.question_id = ques.question_id
                WHERE asm.id = {assessmentId}
                GROUP BY 
                    ques.question_id, 
                    ques.description, 
                    ques.question_type, 
                    testQues.sequence_order
                ORDER BY testQues.sequence_order ASC;
            ")
            .ToListAsync();
    }

    public async Task<bool> SaveAssessmentAnswersAsync(List<StudentAnswer>? answers)
    {
        if (answers == null || !answers.Any())
            return false;

        var studentId    = answers[0].StudentId;
        var assessmentId = answers[0].AssessmentId;

        // ✅ Delete any previous answers for this student + assessment
        var existingAnswers = _context.StudentAnswers
            .Where(s => s.StudentId    == studentId
                     && s.AssessmentId == assessmentId);

        _context.StudentAnswers.RemoveRange(existingAnswers);

        // ✅ Set timestamp on fresh answers
        foreach (var answer in answers)
        {
            answer.CreatedAt = DateTime.Now;
            Console.WriteLine("Date: " + answer.CreatedAt);
        }

        await _context.StudentAnswers.AddRangeAsync(answers);

        // ✅ Mark assessment as Completed
        var assessment = await _context.Assessments
            .FirstOrDefaultAsync(a => a.Id == assessmentId);

        if (assessment != null)
        {
            assessment.Status = "Completed";
        }

        var rowsAffected = await _context.SaveChangesAsync();
        return rowsAffected > 0;
    }

    public async Task<AssessmentReportDto> GetResultData(int studentId, int assessmentId)
    {
        var results = await _context.StudentAssessmentReports
            .FromSqlInterpolated($"CALL GetStudentAssessmentReport({studentId}, {assessmentId})")
            .ToListAsync();

        var report = results.FirstOrDefault();
        return report;
    }

    public async Task<int> GetTotalAssessmentsAsync()
    {
        return await _context.Assessments.CountAsync();
    }

    public async Task<int> GetCompletedAssessmentsAsync()
    {
        return await _context.Assessments.CountAsync(x => x.Status == "Completed");
    }

    public async Task<List<AssessmentSummaryDto>> GetAssessmentSummariesForStudent(long studentId)
    {
        var data = await (
            from a in _context.Assessments

            where a.StudentId == studentId

            join t in _context.Tests
                on a.TestId equals t.Id into tg
            from t in tg.DefaultIfEmpty()

            join pi in _context.PersonalInformations
                on (int?)a.StudentId equals pi.UserId into pig
            from pi in pig.DefaultIfEmpty()

            join sar in _context.StudentAssessmentResults
                on (int?)a.Id equals sar.AssessmentId into sarg
            from sar in sarg.DefaultIfEmpty()

            from tq in _context.TestQuestions
                .Where(x => t != null && x.TestId == t.Id)
                .DefaultIfEmpty()

            from sa in _context.StudentAnswers
                .Where(x => x.AssessmentId == (int)a.Id &&
                            (tq != null && x.QuestionId == (int)tq.QuestionId))
                .DefaultIfEmpty()

            from mo in _context.McqOptions
                .Where(x => tq != null && x.QuestionId == (int?)tq.QuestionId)
                .DefaultIfEmpty()

            group new { a, t, pi, sar, tq, sa, mo } by new
            {
                AssessmentId     = a.Id,
                Title            = t != null ? t.Title : null,
                StudentId        = a.StudentId,
                StudentName      = pi != null ? pi.FullName : null,
                Status           = a.Status,
                Score            = sar != null ? (float?)sar.Score : null,
                Percentile       = sar != null ? (float?)sar.Percentile : null,
                TimeTakenMinutes = sar != null ? (long?)sar.TimeTakenMinutes : null
            }
            into g

            select new AssessmentSummaryDto
            {
                AssessmentId    = g.Key.AssessmentId,
                AssessmentTitle = g.Key.Title ?? "No Test",

                Student = new StudentDto
                {
                    Id       = (int)(g.Key.StudentId ?? 0),
                    FullName = g.Key.StudentName ?? "Unknown"
                },

                Status           = g.Key.Status,
                Score            = g.Key.Score ?? 0f,
                Percentile       = g.Key.Percentile ?? 0f,
                TimeTakenMinutes = g.Key.TimeTakenMinutes ?? 0L,

                TotalQuestions = g
                    .Where(x => x.tq != null)
                    .Select(x => x.tq!.QuestionId)
                    .Distinct()
                    .Count(),

                CorrectAnswers = g
                    .Where(x =>
                        x.sa != null &&
                        x.mo != null &&
                        x.sa.SelectedOption == x.mo.CorrectAnswer)
                    .Select(x => x.sa!.QuestionId)
                    .Distinct()
                    .Count(),

                WrongAnswers = g
                    .Where(x =>
                        x.sa != null &&
                        x.mo != null &&
                        x.sa.SelectedOption != null &&
                        x.sa.SelectedOption != x.mo.CorrectAnswer)
                    .Select(x => x.sa!.QuestionId)
                    .Distinct()
                    .Count()
            }
        ).ToListAsync();

        return data;
    }

    public List<StudentAssessmentDto> GetFullData()
    {
        var data = (from a in _context.Assessments

                    join t in _context.Tests
                        on a.TestId equals t.Id into testGroup
                    from t in testGroup.DefaultIfEmpty()

                    join u in _context.Users
                        on a.StudentId equals u.Id into userGroup
                    from u in userGroup.DefaultIfEmpty()

                    join p in _context.PersonalInformations
                        on u.Id equals p.UserId into personalGroup
                    from p in personalGroup.DefaultIfEmpty()

                    join r in _context.StudentAssessmentResults
                        on a.Id equals (long?)r.AssessmentId into resultGroup
                    from r in resultGroup.DefaultIfEmpty()

                    select new StudentAssessmentDto
                    {
                        AssessmentId = a.Id,

                        TestId    = t != null ? t.Id : 0,
                        TestTitle = t != null ? t.Title : "No Test",

                        StudentId   = u != null ? u.Id : 0,
                        StudentName = p != null ? p.FullName : "Unknown",

                        Status      = a.Status,
                        AssignedAt  = a.AssignedAt,
                        ScheduledAt = a.ScheduledAt,

                        Result = r == null ? null : new ResultDto
                        {
                            Score            = r.Score,
                            Percentile       = r.Percentile,
                            TimeTakenMinutes = r.TimeTakenMinutes
                        }
                    }).ToList();

        return data;
    }

    Task IAssessmentRepository.AssignAssessmentAsync(AssignAssessmentDto dto)
    {
        return AssignAssessmentAsync(dto);
    }
}
