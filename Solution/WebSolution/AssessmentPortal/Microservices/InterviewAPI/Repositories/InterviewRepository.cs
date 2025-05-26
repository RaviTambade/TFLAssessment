using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;

namespace Transflower.TFLAssessment.Repositories;

//Providers
public class InterviewRepository : IInterviewRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public InterviewRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }


    public async Task<List<InterviewCandidateDetails>> GetAllInterviewCandidates()
    {
        List<InterviewCandidateDetails> CandidatesInfo = new List<InterviewCandidateDetails>();
        // string query = @"select employees.firstname,employees.lastname,interviews.candidateid from employees
        //                inner join interviews
        //                where employees.id=interviews.candidateid
        //                order by interviews.candidateid asc;";

        string query = @"select interviews.candidateid,employees.firstname,employees.lastname,subjects.title
                        from interviews 
                        inner join employees on  interviews.candidateid= employees.id
                        inner join subjectmatterexperts on interviews.smeid = subjectmatterexperts.id
                        inner join subjects on subjectmatterexperts.subjectid=subjects.id;";

        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        // connection.Open();
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();


            while (reader.Read())
            {
                int candidateid = int.Parse(reader["candidateid"].ToString());
                string fname = reader["firstname"].ToString();
                string lname = reader["lastname"].ToString();
                string title = reader["title"].ToString();
                InterviewCandidateDetails CandidateInfo = new InterviewCandidateDetails();
                CandidateInfo.CandidateId = candidateid;
                CandidateInfo.FirstName = fname;
                CandidateInfo.LastName = lname;
                CandidateInfo.Title = title;
                CandidatesInfo.Add(CandidateInfo);


            }
            reader.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return CandidatesInfo;
    }



    public async Task<List<InterviewCandidateDetails>> GetInterviewedCandidatesSubjects(int candidateId)
    {
        List<InterviewCandidateDetails> candidateDetails = new List<InterviewCandidateDetails>();
        string query = @"select interviews.candidateid,employees.firstname,employees.lastname,subjects.title
                        from interviews inner join employees on  interviews.candidateid= employees.id
                        inner join subjectmatterexperts on interviews.smeid = subjectmatterexperts.id
                        inner join subjects on subjectmatterexperts.subjectid=subjects.id
                        where interviews.candidateid=@CandidateId;";


        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@CandidateId", candidateId);
        try
        {
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int candidateid = int.Parse(reader["candidateid"].ToString());
                string subName = reader["title"].ToString();
                string firstName = reader["firstname"].ToString();
                string lastName = reader["lastname"].ToString();

                InterviewCandidateDetails InterviewSubject = new InterviewCandidateDetails();
                InterviewSubject.CandidateId = candidateid;
                InterviewSubject.FirstName = firstName;
                InterviewSubject.LastName = lastName;
                InterviewSubject.Title = subName;



                candidateDetails.Add(InterviewSubject);
            }
            reader.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return candidateDetails;
    }



    public async Task<InterviewDetails> GetInterviewDetails(int interviewId)
    {
        Console.WriteLine("In function");
        InterviewDetails interviewInfo = new InterviewDetails();
        string query = "spinterviewdetails";


        MySqlConnection connection = new MySqlConnection(_connectionString);
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@pinterviewId", interviewId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {

                string interviewdate = reader["interviewdate"].ToString();
                string interviewtime = reader["interviewtime"].ToString();
                string smeName = reader["SmeName"].ToString();


                interviewInfo.Id = interviewId;
                interviewInfo.InterviewDate = interviewdate;
                interviewInfo.InterviewTime = interviewtime;
                interviewInfo.SMEName = smeName;
                Console.WriteLine(interviewInfo.Id + " " + interviewInfo.InterviewDate + " " + interviewInfo.InterviewTime + " " + interviewInfo.SMEName);

            }
            reader.Close();


        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return interviewInfo;
    }


    public async Task<bool> RescheduleInterview(int interviewId, DateTime date)
    {
        bool status = false;
        string query = "update interviews set interviewdate =@Interviewdate  where  id =@InterviewId ";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@Interviewdate", date);
        command.Parameters.AddWithValue("@InterviewId", interviewId);
        try
        {
            await connection.OpenAsync();
            int rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;

    }

    public async Task<bool> RescheduleInterview(int interviewId, string time)
    {
        bool status = false;
        string query = "update interviews set interviewtime =@InterviewTime  where  id =@InterviewId ";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@InterviewTime", time);
        command.Parameters.AddWithValue("@InterviewId", interviewId);
        try
        {
            await connection.OpenAsync();
            int rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }

    public async Task<bool> RescheduleInterview(int interviewId, string time, DateTime date)
    {
        bool status = false;
        string query = "update interviews set interviewdate =@Interviewdate,interviewtime =@InterviewTime  where  id =@InterviewId ";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@InterviewTime", time);
        command.Parameters.AddWithValue("@Interviewdate", date);
        command.Parameters.AddWithValue("@InterviewId", interviewId);
        try
        {
            await connection.OpenAsync();
            int rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }


    public async Task<bool> ChangeInterviewer(int interviewId, int smeId)
    {
        bool status = false;
        string query = "update interviews set smeid =@Smeid  where  id =@InterviewId ";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@Smeid", smeId);
        command.Parameters.AddWithValue("@InterviewId", interviewId);

        try
        {
            await connection.OpenAsync();
            int rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;

    }


    public async Task<bool> CancelInterview(int interviewId)
    {
        bool status = false;
        string query = "delete from interviews where id =@Id";
        MySqlConnection connection = new MySqlConnection(_connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@Id", interviewId);

        try
        {
            await connection.OpenAsync();
            int rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;

    }

}