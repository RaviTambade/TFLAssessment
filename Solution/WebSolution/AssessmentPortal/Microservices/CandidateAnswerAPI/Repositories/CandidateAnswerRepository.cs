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
    }
}
