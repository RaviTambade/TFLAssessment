using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;

namespace Transflower.TFLAssessment.Repositories
{
    public class CandidateAnswerRepository : ICandidateAnswerRepository
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public CandidateAnswerRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
        }

        public async Task<bool> InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers)
        {
            bool status = false;
            string query = "INSERT INTO candidateanswers (candidateid, testquestionid, answerkey) VALUES (@CandidateId, @TestQuestionId, @AnswerKey)";
            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                try
                {
                    await connection.OpenAsync();
                    foreach (var answer in answers)
                    {
                        using (MySqlCommand command = new MySqlCommand(query, connection))
                        {
                            command.Parameters.AddWithValue("@CandidateId", candidateId);
                            command.Parameters.AddWithValue("@TestQuestionId", answer.TestQuestionId);
                            command.Parameters.AddWithValue("@AnswerKey", answer.AnswerKey);

                            int rowsAffected = await command.ExecuteNonQueryAsync();
                            if (rowsAffected > 0)
                            {
                                status = true;
                            }
                        }
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
            return status;
        }

        public async Task<List<CandidateAnswer>> GetCandidateAnswers(int candidateId, int assessmentid)
        {
            List<CandidateAnswer> answers = new List<CandidateAnswer>();
            string query = "SELECT * FROM candidateanswers WHERE candidateid = @CandidateId AND testquestionid IN (SELECT testquestions.id FROM testquestions inner join assessments on assessments.test_id=testquestions.testid where assessments.id=@AssessmentId)";
            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                try
                {   
                    await connection.OpenAsync();
                    using (MySqlCommand command = new MySqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@CandidateId", candidateId);
                        command.Parameters.AddWithValue("@AssessmentId", assessmentid);

                        MySqlDataReader reader = command.ExecuteReader();
                        {
                            while (await reader.ReadAsync())
                            {
                                CandidateAnswer answer = new CandidateAnswer
                                {
                                    Id = reader.GetInt32("id"),
                                    AssessmentId=assessmentid,
                                    CandidateId = reader.GetInt32("candidateid"),
                                    TestQuestionId = reader.GetInt32("testquestionid"),
                                    AnswerKey = reader.GetString("answerkey")
                                };
                                answers.Add(answer);
                            }
                        }
                    }

                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
            return answers;
        }

        public async Task<List<CandidateAnswerResult>> GetCandidateAnswerResultsAsync(int candidateId, int assessmentid)
        {
            var list = new List<CandidateAnswerResult>();
            string sql = @"
                SELECT 
                    ca.testquestionid,
                    ca.answerkey AS CandidateAnswer,
                    qb.answerkey AS CorrectAnswer
                FROM candidateanswers ca
                JOIN testquestions tq ON ca.testquestionid = tq.id
                JOIN questionbank qb ON tq.questionbankid = qb.id
                JOIN assessments a ON a.test_id = tq.testid
                WHERE ca.candidateid = @CandidateId AND a.id = @AssessmentId";

            await using var conn = new MySqlConnection(_connectionString);
            await conn.OpenAsync();

            await using var cmd = new MySqlCommand(sql, conn);
            cmd.Parameters.AddWithValue("@candidateId", candidateId);
            cmd.Parameters.AddWithValue("@AssessmentId", assessmentid);

            await using var reader = await cmd.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                var result = new CandidateAnswerResult
                {
                    CandidateAnswer = reader.GetString("CandidateAnswer"),
                    CorrectAnswer = reader.GetString("CorrectAnswer"),
                    IsCorrect = reader.GetString("CandidateAnswer")
                                       .Equals(reader.GetString("CorrectAnswer"), StringComparison.OrdinalIgnoreCase),
                    TestQuestionId = reader.GetInt32("testquestionid")
                };
                list.Add(result);
            }

            return list;
        }

        public async Task<CandidateTestDetails> GetCandidateTestDetails(int candidateId, int AssessmentId)
        {
            CandidateTestDetails details = new CandidateTestDetails();

            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                // Query candidate
                string candidateQuery = "SELECT id, firstname FROM employees WHERE id = @CandidateId;";
                using (MySqlCommand cmd1 = new MySqlCommand(candidateQuery, connection))
                {
                    cmd1.Parameters.AddWithValue("@CandidateId", candidateId);
                    using (MySqlDataReader reader1 = cmd1.ExecuteReader())
                    
                    {
                        if (await reader1.ReadAsync())
                        {
                            details.CandidateId = reader1.GetInt32("id");
                            details.CandidateName = reader1.GetString("firstname");
                        }
                    }
                }
                // Query test
                string testQuery = "SELECT tests.id, tests.name, tests.passinglevel, tests.scheduleddate FROM tests Inner join assessments on assessments.test_id= tests.id WHERE assessments.id = @AssessmentId";
                using (MySqlCommand cmd2 = new MySqlCommand(testQuery, connection))
                {
                    cmd2.Parameters.AddWithValue("@AssessmentId", AssessmentId);
                    
                    using (MySqlDataReader reader2 = cmd2.ExecuteReader())
                    {
                        if (await reader2.ReadAsync())
                        {
                            details.AssessmentId = reader2.GetInt32("id");
                            details.TestName = reader2.GetString("name");
                            details.TestDate = reader2.GetDateTime("scheduleddate");
                            details.TestPassingLevel = reader2.GetInt32("passinglevel");
                        }
                    }
                }
            }

            return details;
        }

    }
}
