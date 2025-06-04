using MySql.Data.MySqlClient;
using System.Threading.Tasks;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Dapper;

namespace Transflower.TFLAssessment.Repositories
{
    public class CandidateAnswerDapperRepository : ICandidateAnswerRepository
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public CandidateAnswerDapperRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
        }

        public async Task<bool> InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers)
        {
            bool status = false;

            using (var connection = new MySqlConnection(_connectionString))
            {
                var query = "INSERT INTO candidateanswers (candidateid, testquestionid, answerkey) VALUES (@CandidateId, @TestQuestionId, @AnswerKey)";

                foreach (var answer in answers)
                {
                    var affectedRows = await connection.ExecuteAsync(query, new
                    {
                        CandidateId = candidateId,
                        TestQuestionId = answer.TestQuestionId,
                        AnswerKey = answer.AnswerKey
                    });

                    if (affectedRows > 0)
                    {
                        status = true;
                    }
                }
            }
            return status;
        }

        public async Task<List<CandidateAnswer>> GetCandidateAnswers(int candidateId, int testId)
        {
            List<CandidateAnswer> answers = new List<CandidateAnswer>();
            return answers;
        }
    }
}
