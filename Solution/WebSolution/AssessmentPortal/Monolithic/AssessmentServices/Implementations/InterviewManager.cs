 
using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories.Implementations;

//Providers
public class InterviewManager :IInterviewManager
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";

 
    public List<InterviewCandidateDetails> GetAllInterviewCandidates()
    {
        List<InterviewCandidateDetails> CandidatesInfo = new List<InterviewCandidateDetails>();
        string query = @"select employees.firstname,employees.lastname,interviews.candidateid from employees
                       inner join interviews
                       where employees.id=interviews.candidateid
                       order by interviews.candidateid asc;";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        connection.Open();
        try
        {
            MySqlDataReader reader = command.ExecuteReader();


            while (reader.Read())
            {
                int candidateid = int.Parse(reader["candidateid"].ToString());
                string fname = reader["firstname"].ToString();
                string lname = reader["lastname"].ToString();
                InterviewCandidateDetails CandidateInfo = new InterviewCandidateDetails();
                CandidateInfo.CandidateId = candidateid;
                CandidateInfo.FirstName = fname;
                CandidateInfo.LastName = lname;
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
            connection.Close();
        }
        return CandidatesInfo;
    }

    public List<InterviewCandidateDetails> GetInterviewedCandidatesSubjects(int candidateId)
    {
        List<InterviewCandidateDetails> candidateDetails = new List<InterviewCandidateDetails>();
        string query = @"select interviews.candidateid,subjects.title
                         from interviews
                         inner join subjectmatterexperts
                         on interviews.smeid = subjectmatterexperts.id
                         inner join subjects on subjectmatterexperts.subjectid=subjects.id
                         where interviews.candidateid=@CandidateId;";


        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@CandidateId", candidateId);
        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int candidateid = int.Parse(reader["candidateid"].ToString());
                string subName = reader["title"].ToString();
                InterviewCandidateDetails InterviewSubjects = new InterviewCandidateDetails();
                InterviewSubjects.CandidateId = candidateid;
               // InterviewSubjects.InterviewSubjectName = subName;
                candidateDetails.Add(InterviewSubjects);
            }
            reader.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            connection.Close();
        }
        return       candidateDetails;
;
    }

    
    public InterviewDetails GetInterviewDetails(int interviewId)
    {
        Console.WriteLine("In function");
        InterviewDetails interviewInfo = new InterviewDetails();
        string query = "spinterviewdetails";


        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@pinterviewId", interviewId);
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string interviewdate = reader["interviewdate"].ToString();
                string interviewtime = reader["interviewtime"].ToString();
                string smeName = reader["SmeName"].ToString();


                interviewInfo.Id = id;
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
            connection.Close();
        }
        return interviewInfo;
    }

    public bool ReschduleInterview(int interviewId,DateTime date){
       bool status = false;
        string query = "update interviews set interviewdate =@interviewdate  where  id =@interviewId ";
        MySqlConnection connection = new MySqlConnection(connectionString);
       MySqlCommand command = new MySqlCommand(query, connection);
         command.Parameters.AddWithValue("@interviewdate", date);
          command.Parameters.AddWithValue("@interviewId", interviewId);
        try
        {
            connection.Open();
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
            connection.Close();
        }
        return status;
    
   }



     public bool ChangeInterviewer(int interviewId, int smeId){
       bool status = false;
        string query = "update interviews set smeid =@smeid  where  id =@interviewId ";
        MySqlConnection connection = new MySqlConnection(connectionString);
       MySqlCommand command = new MySqlCommand(query, connection);
       command.Parameters.AddWithValue("@smeid", smeId);
        command.Parameters.AddWithValue("@interviewId", interviewId);
         
        try
        {
            connection.Open();
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
            connection.Close();
        }
        return status;
    
   }



     public  bool CancelInterview(int interviewId){
       bool status = false;
        string query = "delete from interview where id =@id";
        MySqlConnection connection = new MySqlConnection(connectionString);
       MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@id", interviewId);
         
        try
        {
            connection.Open();
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
            connection.Close();
        }
        return status;
    
   }

   
}
