using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Dapper;
namespace Transflower.TFLAssessment.Repositories;

public class CandidateAnswerDapperRepository:ICandidateAnswerRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public CandidateAnswerDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }
 
    public async Task<bool> InsertCandidateAnswers(int candidateId, int testQuestionId)
    {
        await Task.Delay(100);
        bool status = false;
        { 
            var query = "insert into testquestions(testid,questionBankid) values ( "+candidateId+","+testQuestionId+")"; 
            if(con.Execute(query) > 0)
            status = true;
        }
        
        return status;
    }
}
