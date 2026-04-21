using Backend.Dtos;
using Backend.Repositories.Interfaces;
using Dapper;
using MySql.Data.MySqlClient;
using System.Data;

namespace Backend.Repositories.Implementations
{
    public class TestHistoryRepository : ITestHistoryRepository
    {
        private readonly IConfiguration _configuration;

        public TestHistoryRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private IDbConnection Connection =>
            new MySqlConnection(_configuration.GetConnectionString("DefaultConnection"));

        public async Task<IEnumerable<TestHistoryDto>> GetAllTestHistoryAsync()
        {
            using var db = Connection;
            db.Open();

            string query = @"
                SELECT 
                    a.id AS SrNo,
                    r.runtime_name AS Runtime,
                    t.title AS Title,
                    t.duration AS Duration,
                    t.difficulty AS Difficulty,
                    DATE_FORMAT(t.created_at, '%Y-%m-%d') AS CreateDate,
                    a.status AS Status
                FROM assessments a
                INNER JOIN tests t 
                    ON a.test_id = t.id
                LEFT JOIN runtimes r
                    ON t.sme_runtime_id = r.id
                ORDER BY a.assigned_at DESC;
            ";

            return await db.QueryAsync<TestHistoryDto>(query);
        }

        public async Task<TestDetailsDto?> GetTestDetailsByIdAsync(int id)
        {
            using var db = Connection;
            db.Open();

            string query = @"
                SELECT
                    a.id AS Id,
                    t.title AS Title,
                    t.description AS Description,
                    t.duration AS Duration,
                    t.difficulty AS Difficulty,
                    a.assigned_at AS CreatedAt,
                    t.status AS Status
                FROM assessments a
                INNER JOIN tests t ON a.test_id = t.id
                WHERE a.id = @Id;

                SELECT
                    q.question_id AS QuestionId,
                    q.description AS Description,
                    q.question_type AS QuestionType,
                    q.difficulty_level AS DifficultyLevel,
                    q.created_at AS CreatedAt,
                    q.status AS Status
                FROM test_questions tq
                INNER JOIN assessments a ON tq.test_id = a.test_id
                INNER JOIN questions q ON tq.question_id = q.question_id
                WHERE a.id = @Id
                ORDER BY tq.sequence_order;
            ";

            using var multi = await db.QueryMultipleAsync(query, new { Id = id });

            var testDetails = await multi.ReadFirstOrDefaultAsync<TestDetailsDto>();

            if (testDetails != null)
            {
                testDetails.Questions = (await multi.ReadAsync<QuestionDto>()).ToList();
            }

            return testDetails;
        }
    }
}