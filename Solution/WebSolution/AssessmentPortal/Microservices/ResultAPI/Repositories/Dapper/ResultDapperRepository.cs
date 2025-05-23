/*using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;
using System.Data.SqlClient;
using Dapper;

public class ResultDapperRepository : IResultRepository
{

    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public ResultDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }


    public async Task<int> GetCandidateScore(int candidateId, int testId)
    {
        await Task.Delay(100);

        int score = 0;
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var parameters = new DynamicParameters();
            parameters.Add("@pcandidateId", candidateId);
            parameters.Add("@ptestId", testId);
            parameters.Add("@pscore", dbType: DbType.Int32, direction: ParameterDirection.Output);

            con.Execute("spcandidatetestresult", parameters, commandType: CommandType.StoredProcedure);
            score = parameters.Get<int>("@pscore");
        }
        return score;
    }

    public async Task<bool> SetCandidateTestStartTime(int candidateId, int testId, TestTime time)
    {
        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        {
            string query = "INSERT INTO candidatetestresults (testid, teststarttime, candidateid) VALUES (@TestID, @TestStartTime, @CandidateID)";
            var testTime = new DateTime(time.Year, time.Month, time.Day, time.Hour, time.Minutes, time.Seconds);
            con.Execute(query, new { TestID = testId, TestStartTime = testTime, CandidateID = candidateId });
            status = true;

        }
        return status;
    }

     public async Task<bool> SetCandidateTestEndTime(int candidateId, int testId, TestTime time)
    {
        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        {
            string query = "UPDATE candidatetestresults SET testendtime = @TestEndTime WHERE candidateid = @CandidateId AND testid = @TestId";
            var testTime = new DateTime(time.Year, time.Month, time.Day, time.Hour, time.Minutes, time.Seconds);
            con.Execute(query, new { TestID = testId, TestEndTime = testTime, CandidateID = candidateId });
            status = true;

        }
        return status;
    }

    public async Task<int> GetCandidateTestScore(int candidateId, int testId)
    {
        await Task.Delay(100);
        int score = 0;
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            score = con.QueryFirstOrDefault<int>("select score from candidatetestresults where candidateid=@candidateId and testid=@testId", new { candidateId, testId });
        }
        return score;
    }

    public async Task<CandidateResultDetails> CandidateTestResultDetails(int candidateId, int testId)
    {
        await Task.Delay(100);

        CandidateResultDetails score = null;
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            score = con.QueryFirstOrDefault<CandidateResultDetails>("select score from candidatetestresults where candidateid=@candidateId and testid=@testId", new { candidateId, testId });
        }
        return score;
    }


    public async Task<List<TestResultDetails>> GetTestResultDetails(int testId)
    {
        await Task.Delay(100);
        List<TestResultDetails> candidateResultDetails = new List<TestResultDetails>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var details = con.Query<TestResultDetails>("select candidatetestresults.testid,candidatetestresults.score,candidatetestresults.candidateid,employees.firstname, employees.lastname, subjects.title as subject from candidatetestresults inner join employees on employees.id = candidatetestresults.candidateid inner join tests on candidatetestresults.testid = tests.id  inner join subjects  on tests.subjectid = subjects.id where candidatetestresults.testid = @TestId", new { testId });
            candidateResultDetails = details as List<TestResultDetails>;
        }
        return candidateResultDetails;
    }

    public async Task<List<AppearedCandidate>> GetAppearedCandidates(int testId)
    {
        await Task.Delay(100);
        List<AppearedCandidate> AppearedCandidatesData = new List<AppearedCandidate>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var details = con.Query<AppearedCandidate>("select candidatetestresults.testid, candidatetestresults.candidateid, employees.firstname, employees.lastname from candidatetestresults inner join employees on employees.id= candidatetestresults.candidateid where candidatetestresults.testid=@TestId", new { testId });
            AppearedCandidatesData = details as List<AppearedCandidate>;
        }
        return AppearedCandidatesData;
    }


    public async Task<List<PassedCandidateDetails>> GetPassedCandidateResults(int testId)
    {
        await Task.Delay(100);
        List<PassedCandidateDetails> PassedCandidatesData = new List<PassedCandidateDetails>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var details = con.Query<PassedCandidateDetails>("select tests.id,candidatetestresults.candidateid,candidatetestresults.score,tests.passinglevel,employees.firstname,employees.lastname from tests inner join candidatetestresults on tests.id=candidatetestresults.testid inner join employees on candidatetestresults.candidateid=employees.id where candidatetestresults.score >= tests.passinglevel AND tests.id=@TestId", new { testId });
            PassedCandidatesData = details as List<PassedCandidateDetails>;
        }
        return PassedCandidatesData;
    }


    public async Task<List<FailedCandidateDetails>> GetFailedCandidateResults(int testId)
    {
        await Task.Delay(100);
        List<FailedCandidateDetails> FailedCandidatesData = new List<FailedCandidateDetails>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var details = con.Query<FailedCandidateDetails>("select tests.id,candidatetestresults.candidateid,candidatetestresults.score,tests.passinglevel,employees.firstname,employees.lastname from tests inner join candidatetestresults on tests.id=candidatetestresults.testid inner join employees on candidatetestresults.candidateid=employees.id where candidatetestresults.score <= tests.passinglevel AND tests.id=@TestId", new { testId });
            FailedCandidatesData = details as List<FailedCandidateDetails>;
        }
        return FailedCandidatesData;
    }


    public async Task<bool> SetPassingLevel(int testId, int passingLevel)
    {
        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        {
            string query = "UPDATE tests SET passingLevel = @PassingLevel WHERE id = @TestId";
            if (con.Execute(query, new { PassingLevel = passingLevel, TestId = testId }) > 0)
            {
                status = true;
            }
        }
        return status;
    }

    public async Task<List<CandidateSubjectResults>> GetSubjectResultDetails(int subjectId)
    {
        await Task.Delay(100);
        List<CandidateSubjectResults> SubjectResultDetails = new List<CandidateSubjectResults>();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var details = con.Query<CandidateSubjectResults>("select tests.id,tests.subjectid,candidatetestresults.candidateid,employees.firstname,employees.lastname,candidatetestresults.score,subjects.title from tests inner join candidatetestresults on tests.id=candidatetestresults.testid inner join employees on candidatetestresults.candidateid=employees.id inner join subjects on tests.subjectid=subjects.id where tests.subjectid=@SubjectId", new { subjectId });
            SubjectResultDetails = details as List<CandidateSubjectResults>;
        }
        return SubjectResultDetails;
    }
}
*/