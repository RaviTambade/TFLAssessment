using MySql.Data.MySqlClient;
using System.Data;
using Entities;
using Requests;
using Repositories.Tests;

var builder = WebApplication.CreateBuilder(args);

//adding services to builder
builder.Services.AddCors();

//Core Application
var app = builder.Build();

//asp.net core middleware
//Setting CORS Policy 
app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
  
TestManager manager = new TestManager();

//REST API URL;

string apiEmployeesUrl="/employees";
string apiSubjectsUrl="/subjects";
string apiCandateTestAnswersUrl="/answersheet/candidates/{candidateId}/tests/{testId}";
string apiQuestionsUrl="/questions/tests/{testId}";
string candidateTestResultUrl="/result/candidates/{candidateId}/test/{testId}";
string testStartTimesettingUrl="/test/setstarttime";
string testEndTimesettingUrl="/test/setendtime";

//API Listners
app.MapGet(apiEmployeesUrl,()=>{
    List<Employee> employees = manager.GetAllEmployees();
    return employees;
});

app.MapGet(apiSubjectsUrl,()=>{
   List<Subject> subjects = manager.GetAllSubjects();
   return subjects;
});

app.MapPost(apiCandateTestAnswersUrl,(int candidateId,List<CandidateAnswer> answers)=>{
    bool status=manager.InsertCandidateAnswers(candidateId,answers);
    return status;
});

app.MapGet(apiQuestionsUrl,(int testId)=>{
    List<Question> questions= manager.GetQuestions(testId);
    return questions;
});

app.MapGet(candidateTestResultUrl,(int candidateId,int testId )=>{
 int score=  manager.GetCandidateScore(candidateId,testId);  
  return score;
});

app.MapPost(testStartTimesettingUrl,(CandidateTestDetails testDetails)=>{
     bool status=manager.SetTestStartTime( testDetails.CandidateId,testDetails.TestId, testDetails.Time);
     return status;
});

app.MapPut(testEndTimesettingUrl,( CandidateTestDetails testDetails)=>{

     bool status=manager.SetTestEndTime( testDetails.CandidateId,testDetails.TestId, testDetails.Time);
     return status;
});
app.Run();