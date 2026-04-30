using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MySql.Data.MySqlClient; 
using backend.DTOs;
using backend.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;

namespace backend.Repositories
{
    public class ScoreRepository : IScoreRepository
    {
        private readonly IConfiguration _configuration;

        public ScoreRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<AverageScoreDto> GetAverageScoreByIdAsync(int studentId)
        {
            AverageScoreDto score = new AverageScoreDto();

            using (MySqlConnection con = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                string query = @"
                    SELECT 
                        sar.student_id,
                        COUNT(*) AS total_completed_assessments,
                        ROUND(AVG(sar.percentile), 2) AS avg_score
                    FROM student_assessment_results sar
                    JOIN assessments a 
                        ON sar.assessment_id = a.test_id
                    WHERE a.status = 'Completed'
                    AND sar.student_id = @student_id
                    GROUP BY sar.student_id";

                using (MySqlCommand cmd = new MySqlCommand(query, con))
                {
                    cmd.Parameters.AddWithValue("@student_id", studentId);

                    await con.OpenAsync();

                    using (MySqlDataReader reader = (MySqlDataReader)await cmd.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            score.StudentId = Convert.ToInt32(reader["student_id"]);
                            score.TotalCompletedAssessments = Convert.ToInt32(reader["total_completed_assessments"]);
                            score.AvgScore = Convert.ToDouble(reader["avg_score"]); 
                        }
                    }
                }
            }

            return score;
        }

        public async Task<List<AverageScoreDto>> GetAllStudentsAverageScoreAsync()
        {
            List<AverageScoreDto> list = new List<AverageScoreDto>();

            using (MySqlConnection con = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                string query = @"
                    SELECT 
                        sar.student_id,
                        COUNT(*) AS total_completed_assessments,
                        ROUND(AVG(sar.percentile), 2) AS avg_score
                    FROM student_assessment_results sar
                    JOIN assessments a 
                        ON sar.assessment_id = a.test_id
                    WHERE a.status = 'Completed'
                    GROUP BY sar.student_id";

                using (MySqlCommand cmd = new MySqlCommand(query, con))
                {
                    await con.OpenAsync();

                    using (MySqlDataReader reader = (MySqlDataReader)await cmd.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            list.Add(new AverageScoreDto
                            {
                                StudentId = Convert.ToInt32(reader["student_id"]),
                                TotalCompletedAssessments = Convert.ToInt32(reader["total_completed_assessments"]),
                                AvgScore = Convert.ToDouble(reader["avg_score"]) 
                            });
                        }
                    }
                }
            }

            return list;
        }
         public async Task<AssessmentScoreDto> GetAssessmentResultData(int studentId, int assessmentId)
        {
        AssessmentScoreDto report = new AssessmentScoreDto();

        using (MySqlConnection con = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
        {
            string query = @"
                SELECT 
                    t.id AS test_id,
                    t.title AS test_title,
                    sa.StudentId,
                    
                    COUNT(CASE 
                        WHEN sa.SelectedOption = mo.correct_answer THEN 1 
                    END) AS correct_answers,
                    
                    COUNT(CASE 
                        WHEN sa.SelectedOption <> mo.correct_answer THEN 1 
                    END) AS wrong_answers,
                    
                    COUNT(*) AS total_questions,
                    
                    ROUND(
                        (COUNT(CASE WHEN sa.SelectedOption = mo.correct_answer THEN 1 END) * 100.0) 
                        / COUNT(*), 2
                    ) AS score_percentage

                FROM studentanswers sa
                JOIN assessments a ON sa.AssessmentId = a.id
                JOIN tests t ON a.test_id = t.id
                JOIN mcq_options mo ON sa.QuestionId = mo.question_id

                WHERE sa.StudentId = @student_id
                AND a.id = @assessment_id

                GROUP BY t.id, t.title, sa.StudentId;
            ";

            using (MySqlCommand cmd = new MySqlCommand(query, con))
            {
                cmd.Parameters.AddWithValue("@student_id", studentId);
                cmd.Parameters.AddWithValue("@assessment_id", assessmentId);

                await con.OpenAsync();

                using (MySqlDataReader reader = (MySqlDataReader)await cmd.ExecuteReaderAsync())
                {
                    if (await reader.ReadAsync())
                    {
                        report.TestId = Convert.ToInt64(reader["test_id"]);
                        report.TestTitle = reader["test_title"].ToString();
                        report.StudentId = Convert.ToInt32(reader["StudentId"]);
                        report.CorrectAnswers = Convert.ToInt32(reader["correct_answers"]);
                        report.WrongAnswers = Convert.ToInt32(reader["wrong_answers"]);
                        report.TotalQuestions = Convert.ToInt32(reader["total_questions"]);
                        report.ScorePercentage = Convert.ToDecimal(reader["score_percentage"]);
                    }
                }
            }
        }

        return report;
        }
    }
}