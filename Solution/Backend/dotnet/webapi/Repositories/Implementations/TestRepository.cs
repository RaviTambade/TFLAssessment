using Microsoft.EntityFrameworkCore;
using backend.Models;
using MySql.Data.MySqlClient;
using System.Data;
using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Repositories.Interfaces;
using MySql.Data.MySqlClient.Authentication;
namespace backend.Repositories
{
    public class CreateTestRepository : ICreateTestRepository
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;

        public CreateTestRepository(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;

        }


        public async Task<List<TestQuestions>> GetQuestionsBySMEAsync(long userId)
        {
            List<TestQuestions> questions = new();

            string query = @"
            SELECT DISTINCT
                q.question_id,
                q.description,
                q.question_type,
                q.difficulty_level,
                q.created_at,
                q.status,
                q.language,
                q.layer,
                q.framework,
                q.concept,
                q.runtime

            FROM expertise e

            INNER JOIN questions q
                ON e.runtime = q.runtime
                AND e.framework = q.framework
                AND e.layer = q.layer
                AND e.language = q.language

            WHERE e.user_id = @UserId;
        ";

            string connectionString = ("Server=localhost;Port=3306;Database=tflcomentor_db;User=root;Password=password;");
            using MySqlConnection conn =
                new MySqlConnection(connectionString);

            await conn.OpenAsync();

            using MySqlCommand cmd =
                new MySqlCommand(query, conn);

            cmd.Parameters.AddWithValue("@UserId", userId);

            using MySqlDataReader reader =
                (MySqlDataReader)await cmd.ExecuteReaderAsync();

            while (await reader.ReadAsync())
            {
                questions.Add(new TestQuestions
                {
                    QuestionId =
                        Convert.ToInt64(reader["question_id"]),

                    Description =
                        reader["description"]?.ToString(),

                    QuestionType =
                        reader["question_type"]?.ToString(),

                    DifficultyLevel =
                        reader["difficulty_level"]?.ToString(),

                    CreatedAt =
                        Convert.ToDateTime(reader["created_at"]),

                    Status =
                        reader["status"]?.ToString(),

                    Language =
                        reader["language"]?.ToString(),

                    Layer =
                        reader["layer"]?.ToString(),

                    Framework =
                        reader["framework"]?.ToString(),

                    Concept =
                        reader["concept"]?.ToString(),

                    Runtime =
                        reader["runtime"]?.ToString()
                });
            }

            return questions;
        }


        public async Task<bool> CancelTestAsync(int id)
        {
            var test = await _context.Tests
                .FirstOrDefaultAsync(x => x.Id == id);

            if (test == null)
            {
                return false;
            }

            // Make inactive
            test.Status = false;

            await _context.SaveChangesAsync();

            return true;
        }


        public async Task<long> CreateTestAsync(CreateTestRequests dto)
        {
            long userId = dto.UserId > 0
                ? dto.UserId
                : dto.UserRolesId;

            if (userId <= 0)
                throw new ArgumentException("UserId or UserRolesId must be supplied and greater than 0.");

            long testId = 0;

            string connectionString = ("Server=localhost;Port=3306;Database=tflcomentor_db;User=root;Password=password;");

            using (MySqlConnection con = new MySqlConnection(connectionString))
            {
                await con.OpenAsync();

                using (MySqlTransaction transaction = await con.BeginTransactionAsync())
                {
                    try
                    {
                        // Insert core columns present across DB variants (avoids mismatches: some DBs use
                        // `user_id` without `sme_runtime_id`; dumps may use `sme_runtime_id` without `user_id`).
                        string insertTestQuery = @"
                                    INSERT INTO tests
                                                    (
                                                        sme_id,
                                                        title,
                                                        duration,
                                                        description,
                                                        difficulty,
                                                        created_at,
                                                        status
                                                    )
                                                    VALUES
                                                    (
                                                        @smeId,
                                                        @Title,
                                                        @Duration,
                                                        @Description,
                                                        @Difficulty,
                                                        @CreatedAt,
                                                        @Status
                                                        
                                                    );
                                                    SELECT LAST_INSERT_ID()";



                        using (MySqlCommand cmd = new MySqlCommand(insertTestQuery, con, transaction))
                        {
                            cmd.Parameters.AddWithValue("@smeId", dto.UserId);
                            cmd.Parameters.AddWithValue("@Title", dto.Title);
                            cmd.Parameters.AddWithValue("@Duration", (int)dto.Duration);
                            cmd.Parameters.AddWithValue("@Difficulty", dto.Difficulty);
                            cmd.Parameters.AddWithValue("@Description",
                                dto.Description ?? (object)DBNull.Value);
                            cmd.Parameters.AddWithValue("@CreatedAt", DateTime.Now);
                            cmd.Parameters.AddWithValue("@Status", true);
                            await cmd.ExecuteNonQueryAsync();
                        }

                        using (MySqlCommand idCmd =
                               new MySqlCommand("SELECT LAST_INSERT_ID();", con, transaction))
                        {
                            var idScalar = await idCmd.ExecuteScalarAsync();
                            testId = Convert.ToInt64(idScalar);
                        }

                        // Insert Questions
                        if (dto.QuestionIds != null && dto.QuestionIds.Any())
                        {
                            int seq = 1;

                            foreach (var questionId in dto.QuestionIds)
                            {
                                string insertQuestionQuery = @"
                                    INSERT INTO test_questions
                                    (
                                        test_id,
                                        question_id,
                                        sequence_order
                                    )
                                    VALUES
                                    (
                                        @TestId,
                                        @QuestionId,
                                        @SequenceOrder
                                    )";

                                using (MySqlCommand questionCmd =
                                    new MySqlCommand(insertQuestionQuery, con, transaction))
                                {
                                    questionCmd.Parameters.AddWithValue("@TestId", testId);
                                    questionCmd.Parameters.AddWithValue("@QuestionId", questionId);
                                    questionCmd.Parameters.AddWithValue("@SequenceOrder", seq++);

                                    await questionCmd.ExecuteNonQueryAsync();
                                }
                            }
                        }

                        await transaction.CommitAsync();

                        return testId;
                    }
                    catch
                    {
                        await transaction.RollbackAsync();
                        throw;
                    }
                }
            }
        }

        public async Task<List<GetSmeCreatedTestResponse>> GetSmeCreatedTestAsync(long userId)
        {
            List<GetSmeCreatedTestResponse> tests = new List<GetSmeCreatedTestResponse>();

            string query = @"
                SELECT
                id,
                title,
                description,
                duration,
                difficulty,
                created_at
            FROM tests t
            WHERE user_id =  @UserId;";
            string connectionString = "Server=localhost;Port=3306;Database=tflcomentor_db;User=root;Password=password;";
            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {
                try
                {
                    await conn.OpenAsync();

                    using (MySqlCommand cmd = new MySqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("@UserId", userId);

                        using (MySqlDataReader reader = (MySqlDataReader)await cmd.ExecuteReaderAsync())
                        {
                            while (await reader.ReadAsync())
                            {
                                tests.Add(new GetSmeCreatedTestResponse
                                {
                                    Id = Convert.ToInt64(reader["id"]),
                                    Title = reader["title"]?.ToString(),
                                    Description = reader["description"]?.ToString(),
                                    Duration = Convert.ToInt32(reader["duration"]),
                                    Difficulty = reader["difficulty"]?.ToString(),
                                    CreatedAt = Convert.ToDateTime(reader["created_at"])
                                });
                            }
                        }
                    }

                    return tests;
                }
                catch (Exception ex)
                {
                    throw new Exception("Error while fetching SME created tests.", ex);
                }
            }
        }

        public async Task<List<TestDetails>> GetTestDetailsForMentor()
        {
            List<TestDetails> details = new List<TestDetails>();
            string query = @"SELECT
                        t.id AS test_id,
                        t.title AS test_name,
                        e.language,
                        CONCAT(pi.first_name, ' ', pi.last_name) AS sme_name
                    FROM tests t
                    JOIN users u
                        ON t.user_id = u.id
                    JOIN personal_informations pi
                        ON pi.user_id = u.id
                    LEFT JOIN expertise e
                        ON e.user_id = u.id
                    ORDER BY t.created_at ASC;";

            using (MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                await connection.OpenAsync();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                using MySqlDataReader reader = (MySqlDataReader)await cmd.ExecuteReaderAsync();
                while (await reader.ReadAsync())
                {
                    details.Add(new TestDetails
                    {
                        TestId = Convert.ToInt64(reader["test_id"]),
                        TestName = reader["Test_Name"].ToString(),
                        Language = reader["Language"].ToString(),
                        SMEName = reader["SME_Name"].ToString()
                    });
                }

            }
            return details;
        }

        public async Task<List<TestStudentDetails>> GetTestStudentsDetails(long TestId)
        {
            List<TestStudentDetails> testDetails = new List<TestStudentDetails>();
            string query = @"SELECT
                            t.id  AS testId,
                            t.title,
                        GROUP_CONCAT(
                                CONCAT(pi.first_name, ' ', pi.last_name)
                                ORDER BY pi.first_name SEPARATOR ', ') AS assigned_students,
                            t.difficulty,
                            t.duration,
                            t.created_at
                        FROM tests t
                        JOIN assessments a
                            ON t.id = a.test_id
                        JOIN personal_informations pi
                            ON a.student_id = pi.user_id
                        WHERE t.id = @TestId;";
            using (MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                await connection.OpenAsync();
                using (MySqlCommand cmd = new MySqlCommand(query, connection))
                {
                    cmd.Parameters.AddWithValue("@TestId", TestId);
                    using MySqlDataReader reader = (MySqlDataReader)await cmd.ExecuteReaderAsync();
                {
                        while (await reader.ReadAsync())
                        {
                            testDetails.Add(new TestStudentDetails
                            {
                                TestId = Convert.ToInt64(reader["testId"]),
                                Title = reader["title"].ToString(),
                                StudentName = reader["assigned_students"].ToString(),
                                Difficulty = reader["difficulty"].ToString(),
                                Duration = Convert.ToInt32(reader["duration"]),
                                CreatedAt = Convert.ToDateTime(reader["created_at"])
                            });
                        }
                    }
                }
            }
            return testDetails;
        }
    }
}




