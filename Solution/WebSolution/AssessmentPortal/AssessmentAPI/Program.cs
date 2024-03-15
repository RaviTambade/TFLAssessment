//Minimal Code Strategy


//Entry Point file
//Main function
//Application Type:Web application
//Web Applications are always hosted on Web Server
//Web application always running 
//to handle incomming requests from remote enduser
//process incomming request with some logic
//and sends response to remote user who sent request from remote machine
using MySql.Data.MySqlClient;
using System.Data;
using Entities;
using Repositories.Tests;


var builder = WebApplication.CreateBuilder(args);
//Add Cors services
builder.Services.AddCors();

var app = builder.Build();




//register callback function for responding incomming HTTP Requests
//lambda function
//arrow function
//httprequest handler
//callback function
//http rquest listener

//()=>""
//()=>{}

//HTTP Request: types
//GET Request
//POST Request
//PUT Request
//DELETE Request

//Set up Cors Middleware

app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
  
TestManager  manager = new TestManager();


app.MapGet("/employees",()=>{
    List<Employee> employees = manager.GetAllEmployees();
    return employees;
});

app.MapGet("/subjects",()=>{
   List<Subject> subjects = manager.GetAllSubjects();
   return subjects;
});

var testAPIUrl="/answersheet/candidates/{candidateId}/tests/{testId}";
app.MapPost(testAPIUrl,(CandidateAnswer[] answers,int candidateId)=>{
    bool status=false;
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
       connection.Open();

            foreach (var answer in answers)
            {
                string query = "INSERT INTO candidateanswers (employeeid, testquestionid, answerkey) VALUES (@employeeId, @testQuestionId, @answerKey)";
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
    catch(Exception e){
       Console.WriteLine(e.Message);
    }
    finally{
        connection.Close();
    }
    return status;
});
//get all questions of the test mentioned

app.MapGet("/tests/{testId}",(int testId)=>{
    List<Question> questions= manager.GetTestQuestions(testId);
    return questions;
});

string candidateTestResultUrl="/result/candidates/{candidateId}/test/{testId}";

app.MapGet(candidateTestResultUrl,(int candidateId,int testId )=>{
 int score=  manager.GetCandidateScore(candidateId,testId);
  
  return score;
});

var testAnsAPIUrl="/test/setstarttime";
app.MapPost(testAnsAPIUrl,(CandidateTestDetails testDetails)=>{
    bool status=false;
    var time = testDetails.Time.year +"-"+testDetails.Time.month+"-"+testDetails.Time.day+"T"+testDetails.Time.hour+":"+testDetails.Time.minutes+":"+testDetails.Time.seconds;
    Console.WriteLine("starttime"+time);
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
                string query = "insert into candidatetestresults(testid,teststarttime,candidateid) values (@testid,@teststarttime,@candidateid)";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@testid", testDetails.TestId);
                command.Parameters.AddWithValue("@candidateid", testDetails.CandidateId);
                command.Parameters.AddWithValue("@teststarttime", time);
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
});


string setendtimeUrl="/test/setendtime";   //modify as per req

app.MapPut(setendtimeUrl,( CandidateTestDetails testT)=>{
    bool status=false;
    var time = testT.Time.year +"-"+testT.Time.month+"-"+testT.Time.day+"T"+testT.Time.hour+":"+testT.Time.minutes+":"+testT.Time.seconds;
    Console.WriteLine("endtime"+time);
    string connectionString="server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    MySqlConnection connection = new MySqlConnection(connectionString);
     try{
                string query = "update candidatetestresults set testendtime =@testendtime where candidateid=@candidateid and testid=@testid";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@candidateid", testT.CandidateId);
                command.Parameters.AddWithValue("@testid", testT.TestId);
                command.Parameters.AddWithValue("@testendtime", time);
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
});


//Now all of you need to work on this 

app.Run();