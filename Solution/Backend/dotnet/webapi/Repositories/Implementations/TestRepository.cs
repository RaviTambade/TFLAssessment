using Microsoft.EntityFrameworkCore;
using backend.Models;
using MySql.Data.MySqlClient;
using System.Data;
using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Repositories.Interfaces;

namespace backend.Repositories
{
    public class CreateTestRepository : ICreateTestRepository
    {
        private readonly AppDbContext _context;

        public CreateTestRepository(AppDbContext context)
        {
            _context = context;
        }


    public async Task<List<TestQuestions>> GetQuestionsBySMEAsync(long userId)
    {
        List<TestQuestions> questions = new();

        string query = @"
            SELECT 
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
                                                        userid,
                                                        title,
                                                        duration,
                                                        description,
                                                        difficulty,
                                                        created_at,
                                                        status,
                                                        sme_id
                                                    )
                                                    VALUES
                                                    (
                                                        @userid,
                                                        @Title,
                                                        @Duration,
                                                        @Description,
                                                        @Difficulty,
                                                        @CreatedAt,
                                                        @Status,
                                                        @SmeId
                                                    );

                                                    SELECT LAST_INSERT_ID()";

                   

                using (MySqlCommand cmd = new MySqlCommand(insertTestQuery, con, transaction))
                        {
                     cmd.Parameters.AddWithValue("@userid", dto.UserId);
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
    }
}
