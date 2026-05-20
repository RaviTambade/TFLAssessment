using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.DTO.Responses;
using backend.DTO.Requests;
using MySql.Data.MySqlClient;
using System.Data;

namespace backend.Repositories.Interfaces;

public class AssessmentRepository : IAssessmentRepository
{

    private readonly AppDbContext _context;

    public AssessmentRepository(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<List<Assessments>> GetAllUpcomingAssessments(long userId, DateTime fromDate, DateTime toDate)
    {
        Console.WriteLine($"UserId: {userId}, FromDate: {fromDate}, ToDate: {toDate}");


        // Make end date till 11:59:59 PM
        toDate = toDate.Date.AddDays(1).AddSeconds(-1);

        List<Assessments> assessments = new List<Assessments>();

        string connectionString = "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";


        using (MySqlConnection connection =
               new MySqlConnection(connectionString))
        {
            await connection.OpenAsync();

            string query = @"
                SELECT
    a.id AS AssessmentId,
    t.title AS AssessmentName,
    a.scheduled_at AS ScheduledAt,
    t.duration,
    a.status

FROM assessments a

LEFT JOIN tests t
    ON a.test_id = t.id

WHERE a.student_id = @UserId
    AND a.status = 'Assigned'
    AND DATE(a.scheduled_at) BETWEEN @FromDate AND @ToDate

ORDER BY a.scheduled_at ASC;
            ";

            using (MySqlCommand command =
                   new MySqlCommand(query, connection))
            {
                // Parameters
                command.Parameters.AddWithValue("@UserId", userId);
                command.Parameters.AddWithValue("@Status", "Assigned");
                command.Parameters.AddWithValue("@FromDate", fromDate);
                command.Parameters.AddWithValue("@ToDate", toDate);

                using (MySqlDataReader reader =
                       (MySqlDataReader)await command.ExecuteReaderAsync())
                {
                    int srNo = 1;

                    while (await reader.ReadAsync())
                    {
                        Assessments assessment = new Assessments
                        {
                            SrNo = srNo,

                            AssessmentId =
                                Convert.ToInt32(reader["AssessmentId"]),

                            AssessmentName =
                                reader["AssessmentName"] != DBNull.Value
                                    ? reader["AssessmentName"].ToString()
                                    : null,

                            ScheduledAt =
                                Convert.ToDateTime(reader["ScheduledAt"]),

                            Duration =
                                reader["Duration"] != DBNull.Value
                                    ? Convert.ToInt32(reader["Duration"])
                                    : null,

                            Status =
                                reader["Status"].ToString()
                        };

                        assessments.Add(assessment);

                        srNo++;
                    }
                }
            }
        }

        return assessments;
    }

    public async Task<List<AllAssessments>> GetAllAssessments()
    {
        var data = await (
            from a in _context.Assessments

            join t in _context.Tests on a.TestId equals t.Id into testGroup
            from t in testGroup.DefaultIfEmpty()

            join u in _context.Users on a.StudentId equals u.Id into userGroup
            from u in userGroup.DefaultIfEmpty()

            join p in _context.PersonalInformations on u.Id equals p.UserId into personalGroup
            from p in personalGroup.DefaultIfEmpty()

            select new AllAssessments
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

    // public async Task<List<Tests>> GetTestsAsync()
    // {
    //     return await _context.Tests
    //         .Select(t => new Tests
    //         {
    //             Id = t.Id,
    //             Title = t.Title,
    //             Duration = (int?)t.Duration,
    //             Description = t.Description,
    //             Difficulty = t.Difficulty
    //         })
    //         .ToListAsync();
    // }

    public async Task<List<Tests>> GetTestsAsync()
    {
        var tests = new List<Tests>();
        string connectionString = "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";


        using (var connection = new MySqlConnection(connectionString))
        {
            await connection.OpenAsync();

            string query = @"
            SELECT
                id,
                title,
                duration,
                description,
                difficulty
            FROM tests";

            using (var command = new MySqlCommand(query, connection))
            {
                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        tests.Add(new Tests
                        {
                            Id = Convert.ToInt64(reader["id"]),
                            Title = reader["title"]?.ToString(),
                            Duration = reader["duration"] != DBNull.Value
                                ? Convert.ToInt32(reader["duration"])
                                : null,
                            Description = reader["description"]?.ToString(),
                            Difficulty = reader["difficulty"]?.ToString()
                        });
                    }
                }
            }
        }

        return tests;
    }

    // public async Task<List<string>> GetStudentsAsync()
    // {
    //   return await Task.FromResult(new List<string>());
    // }


    public async Task<List<Student>> GetStudentsAsync()
    {
        List<Student> students = new List<Student>();

        string connectionString = "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";


        using (MySqlConnection conn = new MySqlConnection(connectionString))
        {
            await conn.OpenAsync();

            string query = @"
                SELECT 
                    u.id,
                    CONCAT(
                        pi.first_name,
                        ' ',
                        pi.last_name
                    ) AS FullName,
                    pi.email
                FROM users u
                INNER JOIN personal_informations pi
                    ON u.id = pi.user_id
                INNER JOIN user_roles ur
                    ON u.id = ur.user_id
                INNER JOIN roles r
                    ON ur.role_id = r.role_id
                WHERE r.role_name = 'Student';
            ";

            using (MySqlCommand cmd =
                   new MySqlCommand(query, conn))
            {
                using (MySqlDataReader reader =
                       (MySqlDataReader)await cmd.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        students.Add(new Student
                        {
                            Id = reader.GetInt64("id"),

                            FullName = reader["FullName"].ToString(),

                            Email = reader["email"].ToString()
                        });
                    }
                }
            }
        }

        return students;
    }











    // public async Task<AssignAssessmentResults> AssignAssessmentAsync(AssignAssessments dto)
    // {
    //     // ✅ Validation
    //     if (dto.StudentIds == null || !dto.StudentIds.Any())
    //         throw new Exception("StudentIds is empty");

    //     if (dto.TestId == 0)
    //         throw new Exception("Invalid TestId");

    //     var validStatuses = new[] { "Pending", "Assigned", "Completed", "Cancelled" };

    //     if (!string.IsNullOrEmpty(dto.Status) && !validStatuses.Contains(dto.Status))
    //         throw new Exception("Invalid status");

    //     // ✅ Check which students already have this test assigned
    //     var alreadyAssignedStudentIds = await _context.Assessments
    //         .Where(a => a.TestId == dto.TestId
    //                 && dto.StudentIds.Contains((long)a.StudentId))
    //         .Select(a => a.StudentId)
    //         .ToListAsync();

    //     // ✅ Only assign students who don't already have it
    //     var newStudentIds = dto.StudentIds
    //         .Where(id => !alreadyAssignedStudentIds.Contains(id))
    //         .ToList();

    //     // ✅ If ALL students are already assigned, return early with message
    //     if (!newStudentIds.Any())
    //     {
    //         return new AssignAssessmentResults
    //         {
    //             Success = false,
    //             Message = "This test is already assigned to all selected students."
    //         };
    //     }

    //     // ✅ Insert only new assignments
    //     var assessments = newStudentIds.Select(studentId => new Assessment
    //     {
    //         TestId      = dto.TestId,
    //         StudentId   = studentId,
    //         AssignedBy  = 1,
    //         AssignedAt  = DateTime.Now,
    //         ScheduledAt = dto.ScheduledAt,
    //         Status      = dto.Status ?? "Assigned"
    //     }).ToList();

    //     await _context.Assessments.AddRangeAsync(assessments);
    //     await _context.SaveChangesAsync();

    //     // ✅ Build informative message
    //     var skippedCount = alreadyAssignedStudentIds.Count;
    //     var assignedCount = newStudentIds.Count;

    //     var message = skippedCount > 0
    //         ? $"Assigned to {assignedCount} student(s). Skipped {skippedCount} already assigned."
    //         : $"Assessment assigned to {assignedCount} student(s) successfully.";

    //     return new AssignAssessmentResults
    //     {
    //         Success = true,
    //         Message = message,
    //         AssignedCount = assignedCount,
    //         SkippedCount  = skippedCount
    //     };
    // }

    public async Task<string> AssignAssessmentAsync(
    AssignAssessments dto
)
    {
        // =========================
        // STEP 1 : VALIDATION
        // =========================

        if (dto.TestId <= 0)
        {
            throw new Exception("Invalid Test Id");
        }

        if (dto.StudentIds == null ||
            dto.StudentIds.Count == 0)
        {
            throw new Exception("Students are required");
        }


        // =========================
        // STEP 2 : OPEN CONNECTION
        // =========================
        string connectionString = "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";


        using var conn =
            new MySqlConnection(connectionString);

        await conn.OpenAsync();


        // =========================
        // STEP 3 : LOOP STUDENTS
        // =========================

        foreach (var studentId in dto.StudentIds)
        {
            // =========================
            // STEP 4 : CHECK DUPLICATE
            // =========================

            string checkQuery = @"
            SELECT COUNT(*)
            FROM assessments
            WHERE test_id = @TestId
            AND student_id = @StudentId
        ";

            using var checkCmd =
                new MySqlCommand(checkQuery, conn);

            checkCmd.Parameters.AddWithValue(
                "@TestId",
                dto.TestId
            );

            checkCmd.Parameters.AddWithValue(
                "@StudentId",
                studentId
            );

            int count = Convert.ToInt32(
                await checkCmd.ExecuteScalarAsync()
            );


            // =========================
            // STEP 5 : SKIP IF EXISTS
            // =========================

            if (count > 0)
            {
                continue;
            }


            // =========================
            // STEP 6 : INSERT
            // =========================

            string insertQuery = @"
            INSERT INTO assessments
            (
                test_id,
                student_id,
                assigned_by,
                assigned_at,
                scheduled_at,
                status,
                is_active
            )
            VALUES
            (
                @TestId,
                @StudentId,
                @AssignedBy,
                @AssignedAt,
                @ScheduledAt,
                @Status,
                @IsActive
            )
        ";

            using var insertCmd =
                new MySqlCommand(insertQuery, conn);

            insertCmd.Parameters.AddWithValue(
                "@TestId",
                dto.TestId
            );

            insertCmd.Parameters.AddWithValue(
                "@StudentId",
                studentId
            );

            insertCmd.Parameters.AddWithValue(
                "@AssignedBy",
                dto.AssignedBy
            );

            insertCmd.Parameters.AddWithValue(
                "@AssignedAt",
                DateTime.Now
            );

            insertCmd.Parameters.AddWithValue(
                "@ScheduledAt",
                dto.ScheduledAt
            );

            insertCmd.Parameters.AddWithValue(
                "@Status",
                "Assigned"
            );

            insertCmd.Parameters.AddWithValue(
                "@IsActive",
                true
            );

            await insertCmd.ExecuteNonQueryAsync();
        }


        // =========================
        // STEP 7 : RETURN
        // =========================

        return "Assessment assigned successfully";
    }



    public async Task<List<AssessmentQuestions>> GetAssessmentQuestionsAsync(int assessmentId)
    {
        return await _context.Set<AssessmentQuestions>()
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

        var studentId = answers[0].StudentId;
        var assessmentId = answers[0].AssessmentId;

        // ✅ Delete any previous answers for this student + assessment
        var existingAnswers = _context.StudentAnswers
            .Where(s => s.StudentId == studentId
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

    public async Task<AssessmentReports> GetResultData(int studentId, int assessmentId)
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

    public async Task<List<AssessmentSummaries>> GetAssessmentSummariesForStudent(long studentId)
    {

        return await Task.FromResult(new List<AssessmentSummaries>());

    }

    public List<StudentAssessments> GetFullData()
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

                    select new StudentAssessments
                    {
                        AssessmentId = a.Id,

                        TestId = t != null ? t.Id : 0,
                        TestTitle = t != null ? t.Title : "No Test",

                        StudentId = u != null ? u.Id : 0,
                        StudentName = p != null ? p.FullName : "Unknown",

                        Status = a.Status,
                        AssignedAt = a.AssignedAt,
                        ScheduledAt = a.ScheduledAt,

                        Result = r == null ? null : new backend.DTO.Responses.Results
                        {
                            Score = r.Score,
                            Percentile = r.Percentile,
                            TimeTakenMinutes = r.TimeTakenMinutes
                        }
                    }).ToList();

        return data;
    }

    Task IAssessmentRepository.AssignAssessmentAsync(AssignAssessments dto)
    {
        return AssignAssessmentAsync(dto);
    }
}
