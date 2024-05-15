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
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
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
                        where interviews.candidateid=@CandidateId";
        
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var candidateSubjects = con.Query<InterviewCandidateDetails>(query, new {candidateId});
            candidateSubjectDetails = candidateSubjects as List<InterviewCandidateDetails>;
        }

        return candidateSubjectDetails;
    }



    public async Task<InterviewDetails> GetInterviewDetails(int interviewId)
    {
        
        // InterviewDetails interviewInfo = new InterviewDetails();
        // string query = "spinterviewdetails";


        // MySqlConnection connection = new MySqlConnection(_connectionString);
        // try
        // {
        //     MySqlCommand command = new MySqlCommand(query, connection);
        //     command.CommandType = CommandType.StoredProcedure;
        //     command.Parameters.AddWithValue("@pinterviewId", interviewId);
        //     await connection.OpenAsync();
        //     MySqlDataReader reader = command.ExecuteReader();
        //     while (reader.Read())
        //     {

        //         string interviewdate = reader["interviewdate"].ToString();
        //         string interviewtime = reader["interviewtime"].ToString();
        //         string smeName = reader["SmeName"].ToString();


        //         interviewInfo.Id = interviewId;
        //         interviewInfo.InterviewDate = interviewdate;
        //         interviewInfo.InterviewTime = interviewtime;
        //         interviewInfo.SMEName = smeName;
        //         Console.WriteLine(interviewInfo.Id + " " + interviewInfo.InterviewDate + " " + interviewInfo.InterviewTime + " " + interviewInfo.SMEName);

        //     }
        //     reader.Close();


        // }
        // catch (Exception e)
        // {
        //     Console.WriteLine(e.Message);
        // }
        // finally
        // {
        //     await connection.CloseAsync();
        // }
        // return interviewInfo;


       await Task.Delay(100);

        InterviewDetails interviewDetails  = new InterviewDetails();
        using (IDbConnection con = new MySqlConnection(_connectionString))
        {
            var parameters = new DynamicParameters();
            parameters.Add("@pinterviewId", interviewId);
            interviewDetails = con.QueryFirstOrDefault("spinterviewdetails", parameters, commandType: CommandType.StoredProcedure);
            Console.WriteLine(interviewDetails.InterviewDate);
             Console.WriteLine(interviewDetails.InterviewTime);
             Console.WriteLine(interviewDetails.SMEName);
        }
        return interviewDetails;


    }


    public async Task<bool> RescheduleInterview(int interviewId, DateTime date)
    {    
        await Task.Delay(100);
        bool status = false;
        using (MySqlConnection con = new MySqlConnection(_connectionString))
        { 
            var query = "update interviews set interviewdate =@interviewdate  where  id =@interviewId"; 
            if(con.Execute(query,new {interviewId = interviewId,interviewdate=date}) > 0)
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
            if(con.Execute(query,new {interviewId = interviewId,interviewTime=time}) > 0)
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
            if(con.Execute(query,new {interviewId = interviewId,interviewTime=time,interviewdate =date}) > 0)
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
            if(con.Execute(query,new {smeid= smeId, interviewId = interviewId}) > 0)
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
            if(con.Execute(query,new {id = interviewId}) > 0)
            status = true;
        }
        
        return status;

    }

}