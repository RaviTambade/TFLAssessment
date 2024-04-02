
using AssessmentEntities; //------------------dll
using AssessmentInterfaces;//-------------dll
namespace AssessmentServices;

using Google.Protobuf.WellKnownTypes;
using MySql.Data.MySqlClient;
using System.Data;

public class AssessmentService :IAssessmentService
{
    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";

    public Assessment GetDetails(int assessmentId) //*******
    {
            Assessment assessment=new Assessment();   
            string query = @"select * from tests where id=@assessmentId";

            MySqlConnection connection = new MySqlConnection(connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@assessmentId",assessmentId);
            try
            {
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    int id = int.Parse(reader["id"].ToString());
                    int  smeid = int.Parse(reader["smeid"].ToString());
                    int  subjectId = int.Parse(reader["subjectid"].ToString());
                    // TimeOnly duration =TimeSpan.TryParse(reader["duration"]);
                    DateTime modificationDate=DateTime.Parse(reader["modificationdate"].ToString());
                    DateTime scheduledDate=DateTime.Parse(reader["scheduleddate"].ToString());
                    string status = reader["subjectid"].ToString(); 
                    assessment.Id = id;
                    assessment.ModificationDate=modificationDate;
                    assessment.ScheduledDate=scheduledDate;
                    assessment.SubjectId = subjectId;
                    assessment.SubjectExpertId=smeid;
                    assessment.Status=status;
                    
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
            return assessment;
    }
    public List<Assessment> GetAll(DateTime fromDate, DateTime toDate)  //******
    {
        List<Assessment> assessments=new List<Assessment>();
         string query = @"select * from tests where creationDate  between @fromDate and @toDate";

            MySqlConnection connection = new MySqlConnection(connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@fromDate",fromDate);
            command.Parameters.AddWithValue("@toDate",toDate);
            try
            {
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    int id = int.Parse(reader["id"].ToString());
                    int  smeid = int.Parse(reader["smeid"].ToString());
                    int  subjectId = int.Parse(reader["subjectid"].ToString());
                    // TimeOnly duration =TimeSpan.TryParse(reader["duration"]);
                    DateTime modificationDate=DateTime.Parse(reader["modificationdate"].ToString());
                    DateTime scheduledDate=DateTime.Parse(reader["scheduleddate"].ToString());
                    string status = reader["subjectid"].ToString();
                    Assessment assessment=new Assessment();
                    assessment.Id = id;
                    assessment.ModificationDate=modificationDate;
                    assessment.ScheduledDate=scheduledDate;
                    assessment.SubjectId = subjectId;
                    assessment.SubjectExpertId=smeid;
                    assessment.Status=status;
                    assessments.Add(assessment);
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
            return assessments;
    }
    public List<Assessment> GetAllBySubjectMatterExpert(int smeId)   //********
    {
        List<Assessment> assessments=new List<Assessment>();   
            string query = @"select * from tests where smeid=@smeId";

            MySqlConnection connection = new MySqlConnection(connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@smeId",smeId);

            try
            {
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.Read())
                {
                    int id = int.Parse(reader["id"].ToString());
                    int  smeid = int.Parse(reader["smeid"].ToString());
                    int  subjectId = int.Parse(reader["subjectid"].ToString());
                    // TimeOnly duration =TimeSpan.TryParse(reader["duration"]);
                    DateTime modificationDate=DateTime.Parse(reader["modificationdate"].ToString());
                    DateTime scheduledDate=DateTime.Parse(reader["scheduleddate"].ToString());
                    string status = reader["subjectid"].ToString();
                    Assessment assessment=new Assessment();
                    assessment.Id = id;
                    assessment.ModificationDate=modificationDate;
                    assessment.ScheduledDate=scheduledDate;
                    assessment.SubjectId = subjectId;
                    assessment.SubjectExpertId=smeid;
                    assessment.Status=status;
                    assessments.Add(assessment);
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
            return assessments;
    }
    public bool AddQuestion(int assessmentId, int questionId)  //*******
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "insert into testquestions(testid,testquestionid) values ( @testId, @questionBankId)";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@testId", assessmentId);
        command.Parameters.AddWithValue("@questionBankId", questionId);
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
    public bool AddQuestions(int assessmentId, List<int> questions) //****
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString); 
        try
        {
            foreach(var question in questions){
                string query = "insert into testquestions(testid,questionbankid) values (@testId, @questionBankId)";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@testId", assessmentId);
                command.Parameters.AddWithValue("@questionBankId", question);
                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected > 0)
                {
                    status = true;
                }
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
    public bool RemoveQuestion(int assessmentId, int questionId)
    {
            bool status =false;  
            string query = @"Delete from testquestions where testid=@testId and questionbankid=@questionBankId";
            MySqlConnection connection = new MySqlConnection(connectionString);
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@testId", assessmentId);
            command.Parameters.AddWithValue("@questionBankId", questionId);
            try
            {
                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected>0)
                {
                    status=true;
                    
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
    public bool ChangeDuration(int assessmentId, int duration){
        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "update tests set duration=@duration where id=@assessmentId";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@assessmentId", assessmentId);
        command.Parameters.AddWithValue("@duration", duration);
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
    public bool Reschedule(int assessmentId, DateTime date){
        bool status = false;
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "update tests set scheduleddate=@scheduledDate where id=@assessmentId";
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@assessmentId", assessmentId);
        command.Parameters.AddWithValue("@scheduledDate", date);
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
