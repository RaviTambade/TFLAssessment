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


    public async Task<List<Questions>> GetQuestionsByConceptAsync(string concept)
        {
            List<Questions> questions = new List<Questions>();

            string query = @"SELECT  q.question_id, q.description, q.question_type,q.difficulty_level,
                            m.option_a,m.option_b,m.option_c,m.option_d, m.correct_answer
                            FROM questions q INNER JOIN mcq_options m ON q.question_id = m.question_id and language='" + concept + "';";

            string connectionString = "server=192.168.1.149;port=3306;database=tflcomentor_db;user=root;password='password'";
            using (MySqlConnection con = new MySqlConnection(connectionString))
            {
                await con.OpenAsync();
                using (MySqlCommand cmd = new MySqlCommand(query, con))
                {
                    using (var reader = await cmd.ExecuteReaderAsync())
                    {

                        while (await reader.ReadAsync())
                        {
                            questions.Add(new Questions
                            {
                                QuestionId = reader.GetInt32("question_id"),
                                Description = reader.GetString("description"),
                                QuestionType = reader.GetString("question_type"),
                                DifficultyLevel = reader.GetString("difficulty_level"),
                                OptionA = reader.GetString("option_a"),
                                OptionB = reader.GetString("option_b"),
                                OptionC = reader.GetString("option_c"),
                                OptionD = reader.GetString("option_d"),
                                CorrectAnswer = reader.GetString("correct_answer")
                            });
                        }
                    }
                }
            }

            return  questions;
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
    if (dto.SmeId <= 0)
        throw new ArgumentException("SmeId must be supplied and greater than 0.");

    long testId = 0;

    string connectionString = ("Server=localhost;Port=3306;Database=tflcomentor_db;User=root;Password=password;");

    using (MySqlConnection con = new MySqlConnection(connectionString))
    {
        await con.OpenAsync();

        using (MySqlTransaction transaction = await con.BeginTransactionAsync())
        {
            try
            {
                // Insert Test
                string insertTestQuery = @"
                                    INSERT INTO tests
                                                    (
                                                        sme_runtime_id,
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
                                                        @SmeRuntimeId,
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
                     cmd.Parameters.AddWithValue("@SmeRuntimeId", dto.SmeRuntimeId);
                    cmd.Parameters.AddWithValue("@Title", dto.Title);
                    cmd.Parameters.AddWithValue("@Duration", (int)dto.Duration);
                    cmd.Parameters.AddWithValue("@Difficulty", dto.Difficulty);
                    cmd.Parameters.AddWithValue("@Description",
                        dto.Description ?? (object)DBNull.Value);
                    cmd.Parameters.AddWithValue("@CreatedAt", DateTime.Now);
                            cmd.Parameters.AddWithValue("@Status", true);
                    cmd.Parameters.AddWithValue("@SmeId",dto.SmeId);

                    testId = Convert.ToInt64(await cmd.ExecuteScalarAsync());
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