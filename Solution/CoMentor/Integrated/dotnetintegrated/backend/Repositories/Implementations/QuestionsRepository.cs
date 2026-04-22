using MySql.Data.MySqlClient;
using backend.DTOs;
using backend.Repositories.Interfaces;
using System.Data; // Fixes IDbConnection
using Dapper;
using System.Threading.Tasks;

namespace backend.Repositories.Implementations
{
    public class QuestionsRepository : IQuestionsRepository
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public QuestionsRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("DefaultConnection")
                                            ?? throw new ArgumentNullException(nameof(configuration), "DefaultConnection string is missing");
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
        public async Task<IEnumerable<AssessmentQuestionAnswersDto>> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId)
        {
            const string sql = @"
            SELECT 
        a.id                        AS AssessmentId,
        a.student_id                AS StudentId,
        sa.QuestionId,
        qu.description,
	    mo.option_a,
        mo.option_b,
        mo.option_c,
        mo.option_d,
        mo.correct_answer           AS CorrectAnswer,
        sa.SelectedOption           AS StudentSelectedAnswer,
        CASE 
        WHEN sa.SelectedOption = mo.correct_answer 
        THEN 'Correct' 
        ELSE 'Wrong' 
        END                         AS Result
        FROM assessments a
        JOIN StudentAnswers sa 
            ON sa.AssessmentId = a.Id 
            AND sa.StudentId = a.student_id

        JOIN mcq_options mo 
            ON mo.question_id = sa.QuestionId
        join questions qu 
            ON qu.question_id=mo.question_id
        WHERE 
            a.id = @AssessmentId        
            AND a.student_id = @StudentId 
        ORDER BY 
            sa.QuestionId;";

            using (IDbConnection db = new MySqlConnection(_connectionString))
            {
                return await db.QueryAsync<AssessmentQuestionAnswersDto>(sql, new
                {
                    AssessmentId = assessmentId,
                    StudentId = studentId
                });
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
