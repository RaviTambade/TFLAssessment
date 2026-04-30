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
    }
}