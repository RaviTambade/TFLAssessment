using System;
using backend.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration;
using backend.DTO.Responses;
using backend.Repositories.Interfaces;
using backend.DTO.Requests;
using MySql.Data.MySqlClient;
using System.Data;

namespace backend.Repositories.Implementations;

public class AssessmentRepository : IAssessmentRepository
{
    private readonly IConfiguration _configuration;

    private readonly AppDbContext _context;
    private readonly string _connectionString;

    public AssessmentRepository(AppDbContext context, IConfiguration configuration)
    {
        _context = context;
        _connectionString = configuration.GetConnectionString("DefaultConnection") ?? "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";
    }

    public async Task<List<Assessments>> GetAllUpcomingAssessments(long userId, DateTime fromDate, DateTime toDate)
    {
        Console.WriteLine($"UserId: {userId}, FromDate: {fromDate}, ToDate: {toDate}");


        // Make end date till 11:59:59 PM
        toDate = toDate.Date.AddDays(1).AddSeconds(-1);

        List<Assessments> assessments = new List<Assessments>();

        string connectionString = _configuration.GetConnectionString("DefaultConnection") ?? "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";


        using (MySqlConnection connection =
               new MySqlConnection(connectionString))
        {
            await connection.OpenAsync();

            string query = @"SELECT a.id AS AssessmentId, t.title AS AssessmentName, a.scheduled_at AS ScheduledAt, t.duration, a.status
                    FROM assessments a
                    LEFT JOIN tests t ON a.test_id = t.id
                    WHERE a.student_id = @UserId
                    AND a.status = 'Assigned'
                    AND DATE(a.scheduled_at) BETWEEN @FromDate AND @ToDate
                    ORDER BY a.scheduled_at ASC;";

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
        var list = new List<AllAssessments>();
        string connectionString = _configuration.GetConnectionString("DefaultConnection") ?? "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";

        using var conn = new MySqlConnection(connectionString);
        await conn.OpenAsync();

        string query = @"
            SELECT a.id AS Id,
                   COALESCE(t.title, 'N/A') AS AssessmentTitle,
                   COALESCE(p.first_name, 'N/A') AS FullName,
                   COALESCE(t.difficulty, 'N/A') AS DifficultyLevel,
                   a.status AS Status,
                   a.is_active AS IsActive
            FROM assessments a
            LEFT JOIN tests t ON a.test_id = t.id
            LEFT JOIN users u ON a.student_id = u.id
            LEFT JOIN personal_informations p ON u.id = p.user_id
        ";

        using var cmd = new MySqlCommand(query, conn);
        using var reader = await cmd.ExecuteReaderAsync();
        int srNo = 1;
        while (await reader.ReadAsync())
        {
            var item = new AllAssessments
            {
                Id = reader.GetInt64("Id"),
                AssessmentTitle = reader["AssessmentTitle"]?.ToString(),
                FullName = reader["FullName"]?.ToString(),
                DifficultyLevel = reader["DifficultyLevel"]?.ToString(),
                Status = reader["Status"]?.ToString(),
                IsActive = reader["IsActive"] != DBNull.Value && Convert.ToBoolean(reader["IsActive"])
            };
            item.SrNo = srNo++;
            list.Add(item);
        }

        return list;
    }

    public async Task<bool> DeactivateAssessment(long id)
    {
        string connectionString = _configuration.GetConnectionString("DefaultConnection") ?? "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";
        using var conn = new MySqlConnection(connectionString);
        await conn.OpenAsync();

        string query = @"UPDATE assessments SET is_active = 0 WHERE id = @Id AND is_active = 1";
        using var cmd = new MySqlCommand(query, conn);
        cmd.Parameters.AddWithValue("@Id", id);
        var affected = await cmd.ExecuteNonQueryAsync();
        return affected > 0;
    }

    public async Task<int> CancelAssessmentsByTestId(long testId)
    {
        string connectionString = _configuration.GetConnectionString("DefaultConnection") ?? "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";
        using var conn = new MySqlConnection(connectionString);
        await conn.OpenAsync();

        // Check test exists
        string checkQuery = "SELECT COUNT(*) FROM tests WHERE id = @TestId";
        using var checkCmd = new MySqlCommand(checkQuery, conn);
        checkCmd.Parameters.AddWithValue("@TestId", testId);
        var count = Convert.ToInt32(await checkCmd.ExecuteScalarAsync());
        if (count == 0) return 0;

        string updateTest = "UPDATE tests SET status = 0 WHERE id = @TestId";
        using var updTestCmd = new MySqlCommand(updateTest, conn);
        updTestCmd.Parameters.AddWithValue("@TestId", testId);
        var testRows = await updTestCmd.ExecuteNonQueryAsync();

        string updateAssess = @"
            UPDATE assessments
            SET status = 'Cancelled', is_active = 0
            WHERE test_id = @TestId
              AND is_active = 1
              AND status <> 'Completed'";
        using var updAssessCmd = new MySqlCommand(updateAssess, conn);
        updAssessCmd.Parameters.AddWithValue("@TestId", testId);
        var assessRows = await updAssessCmd.ExecuteNonQueryAsync();

        return Math.Max(1, testRows + assessRows);
    }

    public async Task<bool> RestoreAssessment(long id)
    {
        string connectionString = _configuration.GetConnectionString("DefaultConnection") ?? "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";
        using var conn = new MySqlConnection(connectionString);
        await conn.OpenAsync();

        string query = @"UPDATE assessments SET is_active = 1 WHERE id = @Id AND is_active = 0";
        using var cmd = new MySqlCommand(query, conn);
        cmd.Parameters.AddWithValue("@Id", id);
        var affected = await cmd.ExecuteNonQueryAsync();
        return affected > 0;
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
        string connectionString = _configuration.GetConnectionString("DefaultConnection") ?? "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";


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

        string connectionString = _configuration.GetConnectionString("DefaultConnection") ?? "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";


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

                            FullName = Convert.ToString(reader["FullName"])!,

                            Email = Convert.ToString(reader["email"])!
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

    public async Task AssignAssessmentAsync(
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
        string connectionString = _configuration.GetConnectionString("DefaultConnection") ?? "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";


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

        return;
    }



    public async Task<List<AssessmentQuestions>> GetAssessmentQuestionsAsync(int assessmentId)
    {
        var questions = new List<AssessmentQuestions>();

        using (var connection = new MySqlConnection(_connectionString))
        {
            await connection.OpenAsync();

            string query = @"
            SELECT
                ques.question_id        AS QuestionId,
                ques.description        AS Description,
                ques.question_type      AS QuestionType,

                mcq.option_a            AS OptionA,
                mcq.option_b            AS OptionB,
                mcq.option_c            AS OptionC,
                mcq.option_d            AS OptionD

            FROM assessments AS asm

            INNER JOIN tests AS tst
                ON asm.test_id = tst.id

            INNER JOIN test_questions AS testQues
                ON testQues.test_id = tst.id

            INNER JOIN questions AS ques
                ON ques.question_id = testQues.question_id

            LEFT JOIN mcq_options AS mcq
                ON mcq.question_id = ques.question_id

            WHERE asm.id = @assessmentId

            ORDER BY testQues.sequence_order ASC;
        ";

            using (var command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@assessmentId", assessmentId);

                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        questions.Add(new AssessmentQuestions
                        {
                            QuestionId = reader["QuestionId"] != DBNull.Value
                                ? Convert.ToInt32(reader["QuestionId"])
                                : 0,

                            Description = reader["Description"]?.ToString(),

                            QuestionType = reader["QuestionType"]?.ToString(),

                            OptionA = reader["OptionA"]?.ToString(),

                            OptionB = reader["OptionB"]?.ToString(),

                            OptionC = reader["OptionC"]?.ToString(),

                            OptionD = reader["OptionD"]?.ToString()
                        });
                    }
                }
            }
        }

        return questions;
    }

   public async Task<bool> SaveAssessmentAnswersAsync(List<StudentAnswer>? answers)
{
    if (answers == null || !answers.Any())
        return false;

    var studentId = answers[0].StudentId;
    var assessmentId = answers[0].AssessmentId;

    string connectionString =
        "server=localhost;port=3306;database=tflcomentor_db;user=root;password=password";

    using var conn = new MySqlConnection(connectionString);
    await conn.OpenAsync();

    using var trans = await conn.BeginTransactionAsync();

    try
    {
        // Delete previous answers
        using (var delCmd = new MySqlCommand(
            @"DELETE FROM studentanswers 
              WHERE StudentId = @StudentId 
              AND AssessmentId = @AssessmentId",
            conn,
            (MySql.Data.MySqlClient.MySqlTransaction)trans))
        {
            delCmd.Parameters.AddWithValue("@StudentId", studentId);
            delCmd.Parameters.AddWithValue("@AssessmentId", assessmentId);

            await delCmd.ExecuteNonQueryAsync();
        }

        // Insert new answers
        foreach (var answer in answers)
        {
            answer.CreatedAt = DateTime.Now;

            using var insertCmd = new MySqlCommand(
                @"INSERT INTO studentanswers
                (
                    StudentId,
                    AssessmentId,
                    QuestionId,
                    SelectedOption,
                    TimeTakenMinutes,
                    CreatedAt
                )
                VALUES
                (
                    @StudentId,
                    @AssessmentId,
                    @QuestionId,
                    @SelectedOption,
                    @TimeTakenMinutes,
                    @CreatedAt
                )",
                conn,
                (MySql.Data.MySqlClient.MySqlTransaction)trans);

            insertCmd.Parameters.AddWithValue("@StudentId", answer.StudentId);
            insertCmd.Parameters.AddWithValue("@AssessmentId", answer.AssessmentId);
            insertCmd.Parameters.AddWithValue("@QuestionId", answer.QuestionId);
            insertCmd.Parameters.AddWithValue("@SelectedOption", answer.SelectedOption ?? "");
            insertCmd.Parameters.AddWithValue("@TimeTakenMinutes", answer.TimeTakenMinutes);
            insertCmd.Parameters.AddWithValue("@CreatedAt", answer.CreatedAt);

            await insertCmd.ExecuteNonQueryAsync();
        }

        // Update assessment status
        using (var updCmd = new MySqlCommand(
            @"UPDATE assessments 
              SET status = 'Completed' 
              WHERE Id = @AssessmentId",
            conn,
            (MySql.Data.MySqlClient.MySqlTransaction)trans))
        {
            updCmd.Parameters.AddWithValue("@AssessmentId", assessmentId);

            await updCmd.ExecuteNonQueryAsync();
        }

        await trans.CommitAsync();

        return true;
    }
    catch (Exception ex)
{
    await trans.RollbackAsync();

    Console.WriteLine(ex.ToString());

    throw;
}
}
    public async Task<AssessmentReports> GetResultData(int studentId, int assessmentId)
    {
        AssessmentReports? report = null;
        string connectionString = "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";
        using var conn = new MySqlConnection(connectionString);
        await conn.OpenAsync();

        using var cmd = new MySqlCommand("GetStudentAssessmentReport", conn);
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.AddWithValue("@studentId", studentId);
        cmd.Parameters.AddWithValue("@assessmentId", assessmentId);

        using var reader = await cmd.ExecuteReaderAsync();
        if (await reader.ReadAsync())
        {
            report = new AssessmentReports
            {
                StudentId = reader.GetInt32("StudentId"),
                AssessmentId = reader.GetInt32("AssessmentId"),
                Score = reader.GetInt32("Score"),
                Percentage = reader.GetInt32("Percentage"),
                TestTitle = reader["TestTitle"]?.ToString(),
                TotalQuestions = reader.GetInt32("TotalQuestions"),
                CorrectAnswers = reader.GetInt32("CorrectAnswers"),
                WrongAnswers = reader.GetInt32("WrongAnswers"),
                ScorePercentage = reader.GetDouble("ScorePercentage")
            };
        }

        return report!;
    }

    public async Task<int> GetTotalAssessmentsAsync()
    {
        string connectionString = _configuration.GetConnectionString("DefaultConnection") ?? "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";
        using var conn = new MySqlConnection(connectionString);
        await conn.OpenAsync();
        using var cmd = new MySqlCommand("SELECT COUNT(*) FROM assessments", conn);
        return Convert.ToInt32(await cmd.ExecuteScalarAsync());
    }

    public async Task<int> GetCompletedAssessmentsAsync()
    {
        string connectionString = _configuration.GetConnectionString("DefaultConnection") ?? "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";
        using var conn = new MySqlConnection(connectionString);
        await conn.OpenAsync();
        using var cmd = new MySqlCommand("SELECT COUNT(*) FROM assessments WHERE status = 'Completed'", conn);
        return Convert.ToInt32(await cmd.ExecuteScalarAsync());
    }

    public async Task<List<AssessmentSummaries>> GetAssessmentSummariesForStudent(long studentId)
    {

        return await Task.FromResult(new List<AssessmentSummaries>());

    }

    public List<StudentAssessments> GetFullData()
    {
        var list = new List<StudentAssessments>();
        string connectionString = "server=localhost;port=3306;database=tflcomentor_db;user=root;password='password'";
        using var conn = new MySqlConnection(connectionString);
        conn.Open();

        string query = @"
            SELECT a.id AS AssessmentId,
                   COALESCE(t.id, 0) AS TestId,
                   COALESCE(t.title, 'No Test') AS TestTitle,
                   COALESCE(u.id, 0) AS StudentId,
                   COALESCE(p.first_name, 'Unknown') AS StudentName,
                   a.status AS Status,
                   a.assigned_at AS AssignedAt,
                   a.scheduled_at AS ScheduledAt,
                   r.score AS ResultScore,
                   r.percentile AS ResultPercentile,
                   r.time_taken_minutes AS ResultTimeTaken
            FROM assessments a
            LEFT JOIN tests t ON a.test_id = t.id
            LEFT JOIN users u ON a.student_id = u.id
            LEFT JOIN personal_informations p ON u.id = p.user_id
            LEFT JOIN student_assessment_results r ON a.id = r.assessment_id
        ";

        using var cmd = new MySqlCommand(query, conn);
        using var reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            var item = new StudentAssessments
            {
                AssessmentId = reader.GetInt64("AssessmentId"),
                TestId = reader.GetInt64("TestId"),
                TestTitle = reader["TestTitle"]?.ToString(),
                StudentId = reader.GetInt64("StudentId"),
                StudentName = reader["StudentName"]?.ToString(),
                Status = reader["Status"]?.ToString(),
                AssignedAt = reader["AssignedAt"] == DBNull.Value ? null : (DateTime?)reader.GetDateTime("AssignedAt"),
                ScheduledAt = reader["ScheduledAt"] == DBNull.Value ? null : (DateTime?)reader.GetDateTime("ScheduledAt"),
                Result = reader["ResultScore"] == DBNull.Value ? null : new backend.DTO.Responses.Results
                {
                    Score = reader.GetDouble("ResultScore"),
                    Percentile = reader.GetDouble("ResultPercentile"),
                    TimeTakenMinutes = reader["ResultTimeTaken"] == DBNull.Value ? null : (int?)Convert.ToInt32(reader["ResultTimeTaken"])
                }
            };
            list.Add(item);
        }

        return list;
    }

    // interface implementation is provided by AssignAssessmentAsync
}
