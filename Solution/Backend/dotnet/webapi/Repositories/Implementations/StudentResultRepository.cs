using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Models;
using backend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;

namespace backend.Repositories.Implementations
{
    public class StudentResultRepository : IStudentResultRepository
    {
        private readonly AppDbContext _context;
        private readonly string _connectionString;

        public StudentResultRepository(AppDbContext context)
        {
            _context = context;
            _connectionString = _context.Database.GetConnectionString();
        }

        public async Task<List<StudentResults>> GetStudentResultsAsync()
        {

            return await Task.FromResult(new List<StudentResults>());
        }

        public async Task<StudentAnswersResults> GetStudentAnswerResultAsync(int questionId, int studentId, int assessmentId)
        {
            StudentAnswersResults result = null;

            string query = @"SELECT q.question_id, q.description AS question_description,
                            m.option_a, m.option_b, m.option_c, m.option_d,
                            m.correct_answer, sa.SelectedOption AS student_selected_answer
                        FROM questions q
                            LEFT JOIN mcq_options m ON q.question_id = m.question_id
                            LEFT JOIN studentanswers sa ON q.question_id = sa.QuestionId
                    AND sa.StudentId = @student_id
                    AND sa.AssessmentId = @assessment_id

                WHERE q.question_id = @question_id;
            ";

            using (MySqlConnection con = new MySqlConnection(_connectionString))
            {
                await con.OpenAsync();

                using (MySqlCommand cmd = new MySqlCommand(query, con))
                {
                    cmd.Parameters.AddWithValue("@student_id", studentId);
                    cmd.Parameters.AddWithValue("@assessment_id", assessmentId);
                    cmd.Parameters.AddWithValue("@question_id", questionId);


                    using (var reader = await cmd.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            result = new StudentAnswersResults
                            {
                                QuestionId = Convert.ToInt32(reader["question_id"]),
                                QuestionDescription = reader["question_description"]?.ToString(),

                                OptionA = reader["option_a"]?.ToString(),
                                OptionB = reader["option_b"]?.ToString(),
                                OptionC = reader["option_c"]?.ToString(),
                                OptionD = reader["option_d"]?.ToString(),

                                CorrectAnswer = reader["correct_answer"]?.ToString(),
                                StudentSelectedAnswer = reader["student_selected_answer"]?.ToString()
                            };
                        }
                    }
                }
            }

            return result;
        }
    }
}