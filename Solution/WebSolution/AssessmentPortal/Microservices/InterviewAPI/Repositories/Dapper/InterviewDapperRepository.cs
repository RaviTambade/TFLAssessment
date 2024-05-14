using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Dapper;

namespace Transflower.TFLAssessment.Repositories;

//Providers
public class InterviewDapperRepository : IInterviewRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public InterviewDapperRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }


    public async Task<List<InterviewCandidateDetails>> GetAllInterviewCandidates()
    {

        await Task.Delay(100);
        List<InterviewCandidateDetails> CandidatesInfo = new List<InterviewCandidateDetails>();
        string query = @"select interviews.candidateid,employees.firstname,employees.lastname,subjects.title
                        from interviews inner join employees on  interviews.candidateid= employees.id
                        inner join subjectmatterexperts on interviews.smeid = subjectmatterexperts.id
                        inner join subjects on subjectmatterexperts.subjectid=subjects.id;";

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var allCandidates = con.Query<InterviewCandidateDetails>(query);
            CandidatesInfo = allCandidates as List<InterviewCandidateDetails>;

        }

        return CandidatesInfo;
    }



    public async Task<List<InterviewCandidateDetails>> GetInterviewedCandidatesSubjects(int candidateId)
    {
        await Task.Delay(100);
        List<InterviewCandidateDetails> candidateSubjectDetails = new List<InterviewCandidateDetails>();
        string query = @"select interviews.candidateid,employees.firstname,employees.lastname,subjects.title
                        from interviews inner join employees on  interviews.candidateid= employees.id
                        inner join subjectmatterexperts on interviews.smeid = subjectmatterexperts.id
                        inner join subjects on subjectmatterexperts.subjectid=subjects.id
                        where interviews.candidateid=@CandidateId;";

        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var candidateSubjects = con.Query<InterviewCandidateDetails>(query, new { candidateId });
            candidateSubjectDetails = candidateSubjects as List<InterviewCandidateDetails>;
        }

        return candidateSubjectDetails;
    }

    public async Task<InterviewDetails> GetInterviewDetails(int interviewId)
    {
        await Task.Delay(100);
        InterviewDetails interviewInfo = null;
        string query = "spinterviewdetails";
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var parameters = new DynamicParameters();
            parameters.Add("@pinterviewId", interviewId);
            interviewInfo = con.QueryMultiple<InterviewDetails>(query, parameters, commandType: CommandType.StoredProcedure);
        }
        return interviewInfo;
    }


    public async Task<bool> RescheduleInterview(int interviewId, DateTime date)
    {

        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        {
            var query = "update interviews set interviewdate =@interviewdate  where  id =@interviewId";
            if (con.Execute(query, new { interviewId = interviewId, interviewdate = date }) > 0)
                status = true;
        }

        return status;

    }

    public async Task<bool> RescheduleInterview(int interviewId, string time)
    {
        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        {
            var query = "update interviews set interviewtime =@interviewTime  where  id =@interviewId";
            if (con.Execute(query, new { interviewId = interviewId, interviewTime = time }) > 0)
                status = true;
        }

        return status;
    }

    public async Task<bool> RescheduleInterview(int interviewId, string time, DateTime date)
    {
        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        {
            var query = "update interviews set interviewdate =@interviewdate,interviewtime =@interviewTime  where  id =@interviewId";
            if (con.Execute(query, new { interviewId = interviewId, interviewTime = time, interviewdate = date }) > 0)
                status = true;
        }

        return status;
    }


    public async Task<bool> ChangeInterviewer(int interviewId, int smeId)
    {

        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        {
            var query = "update interviews set smeid =@smeid  where  id =@interviewId";
            if (con.Execute(query, new { smeid = smeId, interviewId = interviewId }) > 0)
                status = true;
        }

        return status;

    }


    public async Task<bool> CancelInterview(int interviewId)
    {
        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        {
            var query = "delete from interviews where id =@id";
            if (con.Execute(query, new { id = interviewId }) > 0)
                status = true;
        }

        return status;

    }

}