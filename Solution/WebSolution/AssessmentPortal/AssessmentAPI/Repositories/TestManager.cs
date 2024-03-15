using MySql.Data.MySqlClient;
using System.Data;
using Entities;

namespace Repositories.Tests;
public class TestManager{
    public List<Employee> GetAllEmployees(){
  List<Employee> employees=new List<Employee>();
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
        string query = "select * from employee";
        MySqlCommand command = new MySqlCommand(query,connection);
        connection.Open();
        MySqlDataReader reader = command.ExecuteReader();
        while(reader.Read()){
              int id=int.Parse(reader["id"].ToString());
              string fname = reader["fname"].ToString();
              string lname = reader["lname"].ToString();
              string contactno = reader["contactno"].ToString();
              string email = reader["email"].ToString();
              Employee emp = new Employee();
              emp.Id=id;
              emp.FName=fname;
              emp.LName=lname;
              emp.ContactNo=contactno;
              emp.Email=email;
              employees.Add(emp);
        }
        reader.Close();
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return employees;
 }

    public List<Subject> GetAllSubjects(){
     List<Subject> subjects=new List<Subject>();
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
        string query = @"select * from technicalskills";
        MySqlCommand command = new MySqlCommand(query,connection);
        connection.Open();
        MySqlDataReader reader = command.ExecuteReader();
        while(reader.Read()){
              int id=int.Parse(reader["techskid"].ToString());
              string title=reader["title"].ToString();
              Subject subject = new Subject();
              subject.Id=id;
              subject.Title=title;
              subjects.Add(subject);
        }
        reader.Close();
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return subjects;
}

    public int GetCandidateScore(int candidateId,int testId ){

     string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
    int score=0;
    try{
        connection.Open();
        MySqlCommand command = new MySqlCommand("spcandidatetestresult",connection);
        command.CommandType=CommandType.StoredProcedure;
        command.Parameters.AddWithValue("@pcandidateId",candidateId);
        command.Parameters.AddWithValue("@ptestId",testId);
        command.Parameters.AddWithValue("@pscore", MySqlDbType.Int32);

        command.Parameters["@pscore"].Direction = ParameterDirection.Output;
        int rowsAffected=command.ExecuteNonQuery();
        score = Convert.ToInt32(command.Parameters["@pscore"].Value);
        Console.WriteLine(score);
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return score;
}
    
    public List<Question> GetTestQuestions(int testId){
    List<Question> questions=new List<Question>();
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
        string query = @"select * from questions inner join testquestions on testquestions.questionid = questions.qid where testquestions.testid= @testId";
        MySqlCommand command = new MySqlCommand(query,connection);
        command.Parameters.AddWithValue("@testId",testId);
        connection.Open();
        MySqlDataReader reader = command.ExecuteReader();
        while(reader.Read()){
              int id=int.Parse(reader["qid"].ToString());
            int tId=int.Parse(reader["testid"].ToString());
              string question=reader["question"].ToString();
              string a = reader["a"].ToString();
              string b = reader["b"].ToString();
              string c = reader["c"].ToString();
              string d = reader["d"].ToString();
              Question ques = new Question();
              ques.Id=id;
              ques.Title=question;
              ques.A=a;
              ques.B=b;
              ques.C=c;
              ques.D=d;
              ques.TestId= tId;
              questions.Add(ques);
        }
        reader.Close();
    }
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return questions;
    }

}

