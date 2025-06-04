using MySql.Data.MySqlClient;
using System.Data;
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

        public async Task<List<CandidateAnswer>> GetCandidateAnswers(int candidateId, int testId)
        {
            List<CandidateAnswer> answers = new List<CandidateAnswer>();
            string query = "SELECT * FROM candidateanswers WHERE candidateid = @CandidateId AND testquestionid IN (SELECT id FROM testquestions WHERE testid = @TestId)";
            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                try
                {
                    await connection.OpenAsync();
                    using (MySqlCommand command = new MySqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@CandidateId", candidateId);
                        command.Parameters.AddWithValue("@TestId", testId);

                        MySqlDataReader reader = command.ExecuteReader();
                            {
                                while (await reader.ReadAsync())
                                {
                                    CandidateAnswer answer = new CandidateAnswer
                                    {
                                        Id = reader.GetInt32("id"),
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
    }
}
