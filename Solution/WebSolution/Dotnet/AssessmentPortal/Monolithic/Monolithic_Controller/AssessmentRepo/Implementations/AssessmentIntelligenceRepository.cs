using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;


namespace Transflower.TFLAssessment.Repositories;

public class AssessmentIntelligenceRepository: IAssessmentIntelligenceRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public AssessmentIntelligenceRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }
    public async Task<List<AnnualCandidateResult>> GetCandidateResults(int candidateId, int year)
    { 
        
        List<AnnualCandidateResult> results = new List<AnnualCandidateResult>();
        string query = @"select candidatetestresults.score,subjects.title,tests.id from candidatetestresults inner join tests on tests.id=candidatetestresults.testid
                         inner join subjects on subjects.id=tests.subjectid
                         where candidatetestresults.candidateid=@CandidateId and year(teststarttime)=@Year";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@CandidateId", candidateId);
        command.Parameters.AddWithValue("@Year", year);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while(await reader.ReadAsync())
            {
                int score = int.Parse(reader["score"].ToString());
                string title = reader["title"].ToString();
                
                AnnualCandidateResult result =new AnnualCandidateResult();
                result.CandidateId=candidateId;
                result.Score=score;
                result.SubjectTitle=title;          
                results.Add(result);
            }
            await reader.CloseAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
              await connection.CloseAsync();
        }
        return results;
    }
}





