using MySql.Data.MySqlClient;
using backend.DTOs;
using backend.Repositories.Interfaces;

namespace backend.Repositories.Implementations
{
    public class QuestionDetailsRepository : IQuestionDetailsRepository
    {
        private readonly IConfiguration _configuration;

        public QuestionDetailsRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public QuestionDetailsDto QuestionDetailsWithAns(int questionId)
        {
            QuestionDetailsDto dto = null;

            string query = @"
            SELECT 
                q.question_id,
                q.description,
                q.question_type,
                q.difficulty_level,
                q.status,
                f.name AS framework,
                c.name AS concept,
                m.option_a,
                m.option_b,
                m.option_c,
                m.option_d,
                m.correct_answer,
                psa.answer AS problem_answer
            FROM questions q
            LEFT JOIN question_framework_concepts qfc 
                ON q.question_id = qfc.question_id
            LEFT JOIN framework_concepts fc 
                ON qfc.framework_concepts_id = fc.id
            LEFT JOIN frameworks f 
                ON fc.framework_id = f.id
            LEFT JOIN concepts c 
                ON fc.concept_id = c.id
            LEFT JOIN mcq_options m 
                ON q.question_id = m.question_id
            LEFT JOIN problem_statement_answers psa 
                ON q.question_id = psa.question_id
            WHERE q.question_id = @question_id";

            using (MySqlConnection con = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                MySqlCommand cmd = new MySqlCommand(query, con);
                cmd.Parameters.AddWithValue("@question_id", questionId);

                con.Open();
                MySqlDataReader reader = cmd.ExecuteReader();

                if (reader.Read())
                {
                    dto = new QuestionDetailsDto
                    {
                        QuestionId = Convert.ToInt32(reader["question_id"]),
                        Description = reader["description"]?.ToString(),
                        QuestionType = reader["question_type"]?.ToString(),
                        DifficultyLevel = reader["difficulty_level"]?.ToString(),
                        Status = reader["status"]?.ToString(),

                        FrameworkName = reader["framework"]?.ToString(),
                        ConceptName = reader["concept"]?.ToString(),

                        OptionA = reader["option_a"]?.ToString(),
                        OptionB = reader["option_b"]?.ToString(),
                        OptionC = reader["option_c"]?.ToString(),
                        OptionD = reader["option_d"]?.ToString(),
                        CorrectAnswer = reader["correct_answer"]?.ToString(),

                        ProblemAnswer = reader["problem_answer"]?.ToString()
                    };
                }

                return dto;
            }
        }
    }
}