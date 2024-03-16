using MySql.Data.MySqlClient;
using System.Data;
using Entities;
using Requests;

namespace Repositories.Tests;

public class TestManager
{

    private string connectionString = "server=localhost;port=3306;user=root;password=password;database=assessmentdb";
 
    public List<Employee> GetAllEmployees()
    {
        List<Employee> employees = new List<Employee>();
        string query = "select * from employee";

        MySqlConnection connection = new MySqlConnection(connectionString);
        try
        { 
            MySqlCommand command = new MySqlCommand(query, connection);
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["id"].ToString());
                string fname = reader["fname"].ToString();
                string lname = reader["lname"].ToString();
                string contactno = reader["contactno"].ToString();
                string email = reader["email"].ToString();
                Employee emp = new Employee();
                emp.Id = id;
                emp.FName = fname;
                emp.LName = lname;
                emp.ContactNo = contactno;
                emp.Email = email;
                employees.Add(emp);
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
        return employees;
    }

    public List<Subject> GetAllSubjects()
    {
        List<Subject> subjects = new List<Subject>();
        string query = @"select * from technicalskills";

        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        try
        {  
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["techskid"].ToString());
                string title = reader["title"].ToString();
                Subject subject = new Subject();
                subject.Id = id;
                subject.Title = title;
                subjects.Add(subject);
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
        return subjects;
    }

    public int GetCandidateScore(int candidateId, int testId)
    {
        string query="spcandidatetestresult";

        MySqlConnection connection = new MySqlConnection(connectionString);
       

        int score = 0;
        try
        {
             MySqlCommand command = new MySqlCommand(query, connection);
             command.CommandType = CommandType.StoredProcedure;
             command.Parameters.AddWithValue("@pcandidateId", candidateId);
             command.Parameters.AddWithValue("@ptestId", testId);
             command.Parameters.AddWithValue("@pscore", MySqlDbType.Int32);
             command.Parameters["@pscore"].Direction = ParameterDirection.Output;
             connection.Open();
            int rowsAffected = command.ExecuteNonQuery();
            score = Convert.ToInt32(command.Parameters["@pscore"].Value);
            Console.WriteLine(score);
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally
        {
            connection.Close();
        }
        return score;
    }

    public List<Question> GetQuestions(int testId)
    {
        Console.WriteLine( "test Id="+ testId);
        
        List<Question> questions = new List<Question>();
        string query = @"select * from questions inner join testquestions on testquestions.questionid = questions.qid where testquestions.testid= @testId";
         
        MySqlConnection connection = new MySqlConnection(connectionString);
        MySqlCommand command = new MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@testId", testId);

        try
        {
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = int.Parse(reader["qid"].ToString());
                int tId = int.Parse(reader["testid"].ToString());
                string question = reader["question"].ToString();
                string a = reader["a"].ToString();
                string b = reader["b"].ToString();
                string c = reader["c"].ToString();
                string d = reader["d"].ToString();
                Question ques = new Question();
                ques.Id = id;
                ques.Title = question;
                ques.A = a;
                ques.B = b;
                ques.C = c;
                ques.D = d;
                ques.TestId = tId;
                questions.Add(ques);
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
        return questions;
    }

    public bool InsertCandidateAnswers(int candidateId,List<CandidateAnswer> answers)
    {
        bool status = false;
        string query = "INSERT INTO candidateanswers (employeeid, testquestionid, answerkey) VALUES (@employeeId, @testQuestionId, @answerKey)";
        MySqlConnection connection = new MySqlConnection(connectionString);

        try
        {
            connection.Open();

            foreach (var answer in answers)
            {
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@employeeId", candidateId);
                command.Parameters.AddWithValue("@testQuestionId", answer.TestQuestionId);
                command.Parameters.AddWithValue("@answerKey", answer.Answer);

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
 
    public bool SetTestStartTime(int candidateId,int testId,  TestTime time ){

    bool status=false;
    string query = "insert into candidatetestresults(testid,teststarttime,candidateid) values (@testid,@teststarttime,@candidateid)";
     MySqlConnection connection = new MySqlConnection(connectionString);         

    var testTime = time.Year +"-"+time.Month+"-"+time.Day+"T"+time.Hour+":"+time.Minutes+":"+time.Seconds;
    MySqlCommand command = new MySqlCommand(query, connection);
    command.Parameters.AddWithValue("@testid", testId);
    command.Parameters.AddWithValue("@candidateid", candidateId);
    command.Parameters.AddWithValue("@teststarttime", testTime);

    
    try{
        connection.Open();
        int rowsAffected = command.ExecuteNonQuery();
        if (rowsAffected > 0)
        {
            status = true;
        }   
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return status;
}

    public bool SetTestEndTime( int candidateId,int testId, TestTime time ){
    bool status=false;
    MySqlConnection connection = new MySqlConnection(connectionString);
    string query = "update candidatetestresults set testendtime =@testendtime where candidateid=@candidateid and testid=@testid";
               
    var testTime = time.Year +"-"+time.Month+"-"+time.Day+"T"+time.Hour+":"+time.Minutes+":"+time.Seconds;
    MySqlCommand command = new MySqlCommand(query, connection);
    command.Parameters.AddWithValue("@candidateid", candidateId);
    command.Parameters.AddWithValue("@testid", testId);
    command.Parameters.AddWithValue("@testendtime", testTime);

     try{ 
            connection.Open();
            int rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return status;
}
}