using backend.DTOs;
using backend.Models;
using backend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Services.Interfaces;
using System;
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

        public async Task<List<StudentResultDto>> GetStudentResultsAsync()
        {
            var result = await (
                from sar in _context.StudentAssessmentResults

                join a in _context.Assessments
                    on (long?)sar.AssessmentId equals a.Id

                join t in _context.Tests
                    on a.TestId equals t.Id

                join u in _context.Users
                    on sar.StudentId equals u.Id

                join p in _context.PersonalInformations
                    on u.Id equals p.UserId

                join sr in _context.SmeRuntimes
                    on t.SmeRuntimeId equals sr.SmeRuntimeId

                join r in _context.Runtimes
                    on sr.RuntimeId equals r.Id

                select new StudentResultDto
                {
                    student_name = p.FirstName + " " + p.LastName,
                    subject = r.RuntimeName,
                    assessment_title = t.Title,
                    percentile = sar.Percentile,
                    result_status = sar.Percentile > 60 ? "PASS" : "FAIL"
                }
            ).ToListAsync();

            return result;
        }

        public async Task<StudentAnswersResultDto> GetStudentAnswerResultAsync(int questionId, int studentId, int assessmentId)
        {
            StudentAnswersResultDto result = null;

            string query = @"
                SELECT 
                    q.question_id,
                    q.description AS question_description,

                    m.option_a,
                    m.option_b,
                    m.option_c,
                    m.option_d,

                    m.correct_answer,
                    sa.SelectedOption AS student_selected_answer

                FROM questions q

                LEFT JOIN mcq_options m 
                    ON q.question_id = m.question_id

                LEFT JOIN studentanswers sa 
                    ON q.question_id = sa.QuestionId
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
                            result = new StudentAnswersResultDto
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