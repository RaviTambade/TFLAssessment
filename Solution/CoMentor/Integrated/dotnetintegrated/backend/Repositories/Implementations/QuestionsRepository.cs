using MySql.Data.MySqlClient;
using backend.DTOs;
using backend.Repositories.Interfaces;
using System.Threading.Tasks;

namespace backend.Repositories.Implementations
{
    public class QuestionsRepository : IQuestionsRepository
    {
        private readonly IConfiguration _configuration;

        public QuestionsRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<QuestionsDto> QuestionDetailsWithAns(int questionId)
        {
            QuestionsDto dto = null;

            string query = @"
                    SELECT q.question_id,q.description AS question_description,q.question_type,q.difficulty_level,q.status,
                    f.name AS framework_name,c.name AS concept_name,
                     m.option_a,m.option_b,m.option_c,m.option_d,m.correct_answer,psa.answer AS problem_answer FROM questions q

                    LEFT JOIN question_framework_concepts qfc ON q.question_id = qfc.question_id
                    LEFT JOIN framework_concepts fc ON qfc.framework_concepts_id = fc.id
                    LEFT JOIN frameworks f ON fc.framework_id = f.id
                    LEFT JOIN concepts c ON fc.concept_id = c.id
                    LEFT JOIN mcq_options m ON q.question_id = m.question_id
                    LEFT JOIN problem_statement_answers psa ON q.question_id = psa.question_id
                    WHERE q.question_id = @question_id;
                    ";

            using (MySqlConnection con = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                MySqlCommand cmd = new MySqlCommand(query, con);
                cmd.Parameters.AddWithValue("@question_id", questionId);

                await con.OpenAsync();
                using (MySqlDataReader reader = (MySqlDataReader)await cmd.ExecuteReaderAsync())
                {
                    if (await reader.ReadAsync())
                    {
                        dto = new QuestionsDto
                        {
                            QuestionId = Convert.ToInt32(reader["question_id"]),

                            Description = reader["question_description"]?.ToString(),
                            QuestionType = reader["question_type"]?.ToString(),
                            DifficultyLevel = reader["difficulty_level"]?.ToString(),
                            Status = reader["status"]?.ToString(),

                            FrameworkName = reader["framework_name"]?.ToString(),
                            ConceptName = reader["concept_name"]?.ToString(),

                            OptionA = reader["option_a"]?.ToString(),
                            OptionB = reader["option_b"]?.ToString(),
                            OptionC = reader["option_c"]?.ToString(),
                            OptionD = reader["option_d"]?.ToString(),
                            CorrectAnswer = reader["correct_answer"]?.ToString(),

                            ProblemAnswer = reader["problem_answer"]?.ToString()
                        };
                    }
                }

                return dto;
            }
        }

        public async Task<QuestionDetailsDto> ViewQuestionDetails(int questionId)
        {
            QuestionDetailsDto dto = null;

            string connStr = _configuration.GetConnectionString("DefaultConnection");

            using (MySqlConnection conn = new MySqlConnection(connStr))
            {
                string query = @"
                                SELECT 
                                    q.question_id,
                                    q.description AS question_description,
                                    q.question_type,
                                    q.difficulty_level,
                                    q.status,
                                    f.name AS framework_name,
                                    c.name AS concept_name
                                FROM questions q
                                LEFT JOIN question_framework_concepts qfc 
                                    ON q.question_id = qfc.question_id
                                LEFT JOIN framework_concepts fc 
                                    ON qfc.framework_concepts_id = fc.id
                                LEFT JOIN frameworks f 
                                    ON fc.framework_id = f.id
                                LEFT JOIN concepts c 
                                    ON fc.concept_id = c.id
                                WHERE q.question_id = @question_id;
                            ";

                MySqlCommand cmd = new MySqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@question_id", questionId);

                await conn.OpenAsync();

                using (MySqlDataReader reader = (MySqlDataReader)await cmd.ExecuteReaderAsync())
                {
                    if (await reader.ReadAsync())
                    {
                        dto = new QuestionDetailsDto
                        {
                            QuestionId = Convert.ToInt32(reader["question_id"]),
                            QuestionDescription = reader["question_description"]?.ToString(),
                            QuestionType = reader["question_type"]?.ToString(),
                            DifficultyLevel = reader["difficulty_level"]?.ToString(),
                            Status = reader["status"]?.ToString(),
                            FrameworkName = reader["framework_name"]?.ToString(),
                            ConceptName = reader["concept_name"]?.ToString()
                        };
                    }
                }
            }

            return dto;
        }
    }
}