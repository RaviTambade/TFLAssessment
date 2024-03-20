using MySql.Data.MySqlClient;
using System.Data;
using Entities;
using Requests;
using Repositories.Tests;

//using Repositories.Tests1;

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
string apiCriteriaUrl="/criteria";
string apiTestUrl="/tests";
string apiCandateTestAnswersUrl="/answersheet/candidates/{candidateId}";
string question ="/questions/subjects/{subject}/questions/{questionid}";

string allQuestionsByCategoryAPI="/{subjectid}/questions";
string allQuestionsAPI="/questions";
string apiQuestionsUrl="/questions/tests/{testId}";
string candidateTestResultUrl="/result/candidates/{candidateId}/test/{testId}";
string testStartTimesettingUrl="/test/setstarttime";
string testEndTimesettingUrl="/test/setendtime";

string critearia ="/subject/{subject}/question/{questionId}";


//string allQuestionsByCategoryAPI="/questions/subjects/{subjectId}";
string testSubjectCriteriaAPI = "/questions/subjects/{subjectId}/criterias/{criteriaId}";
string  insertnewquestionurl="/question";


//API Listners
app.MapGet(apiEmployeesUrl,()=>{
    List<Employee> employees = manager.GetAllEmployees();
    return employees;
});

app.MapGet(apiSubjectsUrl,()=>{
   List<Subject> subjects = manager.GetAllSubjects();
   return subjects;
});
app.MapGet(apiCriteriaUrl,()=>{
   List<EvaluationCriteria> evaluationcriteria = manager.GetEvalutionCriterias();
   return evaluationcriteria;
});

app.MapGet(apiTestUrl,()=>{
   List<Test> tests = manager.GetAllTests();
   return tests;
});

app.MapPost(apiCandateTestAnswersUrl,(int candidateId,List<CandidateAnswer> answers)=>{
    bool status=manager.InsertCandidateAnswers(candidateId,answers);
    return status;
});

app.MapGet(apiQuestionsUrl,(int testId)=>{
    Console.WriteLine("API URL Test ID="+ testId);
    List<Questions> questions= manager.GetQuestions(testId);
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


app.MapGet(allQuestionsAPI,()=>{     
        QuestionBank qBank=new QuestionBank();
        List<QuestionO> allQuestions = qBank.GetAllQuestions();
        return allQuestions;
    
});

app.MapGet(allQuestionsByCategoryAPI,(int subjectId)=>{
         
        QuestionBank qBank=new QuestionBank();
        List<SubjectQuestions> subjectWiseQuestions = qBank.GetSubjectWiseQuestions(subjectId);
        return subjectWiseQuestions;
    
});


app.MapGet(critearia,(string subject , int questionid)=>{
        
        string criteria = manager.GetCriteria(subject ,questionid);
        return criteria;
    
});

// app.MapPost(insertnewquestionurl,(NewQuestion ques)=>{
//     bool status=manager. Insertquestion(ques);
//     return status;
    
//     });


app.MapGet(testSubjectCriteriaAPI,(int subjectId,int criteriaId)=>{
        QuestionBank qBank=new QuestionBank();
        List<SubjectQuestions> subjectCriteriaQuestions = qBank.GetSubjectCriteriaQuestions(subjectId,criteriaId);
        return subjectCriteriaQuestions;
});

app.MapGet(question,(string subject , int questionid)=>{
        
        Questions question = manager.GetQuestion(subject ,questionid);
       
        return question;
    
});

app.Run();