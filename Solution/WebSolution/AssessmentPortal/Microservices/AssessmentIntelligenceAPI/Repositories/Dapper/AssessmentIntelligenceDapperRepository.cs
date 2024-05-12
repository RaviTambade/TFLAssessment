using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using MySql.Data.MySqlClient;
using System.Data;
using System.Data.SqlClient;
using Dapper;


namespace Transflower.TFLAssessment.Repositories;

public class AssessmentIntelligenceDapperRepository: IAssessmentIntelligenceRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public AssessmentIntelligenceDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");

    }


     public async Task<List<AnnualCandidateResult>> GetCandidateResults(int candidateId, int year)
    {
        await Task.Delay(100);
        List<AnnualCandidateResult> CandidateResults = new List<AnnualCandidateResult>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var details = con.Query<AnnualCandidateResult>("select candidatetestresults.score,subjects.title,tests.id from candidatetestresults inner join tests on tests.id=candidatetestresults.testid inner join subjects on subjects.id=tests.subjectid where candidatetestresults.candidateid=@candidateId and year(teststarttime)=@year", new { candidateId, year });
            CandidateResults = details as List<AnnualCandidateResult>;
        }
        return CandidateResults;
    }
}
  