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
using Requests;
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
  
   TestManager manager = new TestManager();


app.MapGet("/employees",()=>{
    List<Employee> employees = manager.GetAllEmployees();
    return employees;
});

app.MapGet("/subjects",()=>{
   List<Subject> subjects = manager.GetAllSubjects();
   return subjects;
});

var testAPIUrl="/answersheet/candidates/{candidateId}/tests/{testId}";
app.MapPost(testAPIUrl,(int candidateId,List<CandidateAnswer> answers)=>{
    bool status=manager.InsertCandidateAnswers(candidateId,answers);
    return status;
});
//get all questions of the test mentioned

app.MapGet("/tests/{testId}",(int testId)=>{
    List<Question> questions= manager.GetQuestions(testId);
    return questions;
});

string candidateTestResultUrl="/result/candidates/{candidateId}/test/{testId}";

app.MapGet(candidateTestResultUrl,(int candidateId,int testId )=>{
 int score=  manager.GetCandidateScore(candidateId,testId);
  
  return score;
});

var testAnsAPIUrl="/test/setstarttime";

app.MapPost(testAnsAPIUrl,(CandidateTestDetails testDetails)=>{
     bool status=manager.SetTestStartTime( testDetails.TestId,testDetails.CandidateId, testDetails.Time);
     return status;

});


string setendtimeUrl="/test/setendtime";   //modify as per req

app.MapPut(setendtimeUrl,( CandidateTestDetails testDetails)=>{

     bool status=manager.SetTestEndTime( testDetails.TestId,testDetails.CandidateId, testDetails.Time);
     return status;
});


//Now all of you need to work on this 

app.Run();