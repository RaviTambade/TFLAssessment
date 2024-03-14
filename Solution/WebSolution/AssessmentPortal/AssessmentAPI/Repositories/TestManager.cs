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




// public bool  CandidateAnswers(List<CandidateAnswer> answers)
// {
//     bool status=false;
//     string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
//     MySqlConnection connection = new MySqlConnection(connectionString);
//      try{
//        connection.Open();

//             foreach (var answer in answers)
//             {
//                 string query = "INSERT INTO candidateanswers (employeeid, testquestionid, answerkey) VALUES (@employeeId, @testQuestionId, @answerKey)";
//                 MySqlCommand command = new MySqlCommand(query, connection);
//                 command.Parameters.AddWithValue("@employeeId", candidateId);
//                 command.Parameters.AddWithValue("@testQuestionId", answer.TestQuestionId);
//                 command.Parameters.AddWithValue("@answerKey", answer.Answer);

//                 int rowsAffected = command.ExecuteNonQuery();
//                 if (rowsAffected > 0)
//                 {
//                     status = true;
//                 }
//             }  
//     }
//     catch(Exception e){
//        Console.WriteLine(e.Message);
//     }
//     finally{
//         connection.Close();
//     }
//     return status;
// }


}

