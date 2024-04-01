using MySql.Data.MySqlClient;
using System.Data;
using Assessment.Entities;
using Assessment.Repositories.Interfaces;
using Assessment.Repositories.Implementations;

var builder = WebApplication.CreateBuilder(args);
//services configuration


builder.Services.AddCors();
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

builder.Services.AddControllers();

var app = builder.Build();

//ASP.NET middleware configuration

app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
//app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
    endpoints.MapRazorPages();

    endpoints.MapControllers(); // Map Minimal Web API endpoints
});



//REST API URL;
string apiEmployeesUrl="/employees";
string allQuestionsAPI="/questions";
string apiSubjectsUrl="/subjects";
string apiTestUrl="/tests";
string apiCriteriaUrl="/criteria";
string updateAnswer="/questions/answers/{questionId}";
string apiCandidateTestAnswersUrl="/answersheet/candidates/{candidateId}";
string apiQuestionsUrl="/questions/tests/{testId}";
string question ="/questions/subjects/{subject}/questions/{questionid}";
string allQuestionsBySubjectUrl="/questions/subjects/{subjectid}";
string testSubjectCriteriaAPI = "/questions/subjects/{subjectId}/criterias/{criteriaId}";
string insertnewquestionurl="/question";
string insertnewcriteriaurl="/criteria";
string deleteTestQuestion="/testquestions";

string candidateTestScoreUrl="candidates/{candidateId}/tests/{testId}";

string candidateTestResultUrl="/result/candidates/{candidateId}/test/{testId}";

string criteriaBySubjectUrl="/criterias/subjects/{subjectId}";
string UpdateCriteria="/";
string criteria ="/subject/{subject}/question/{questionId}";

string questionUrl="/questions/{questionId}";
string updateQuestionOptions="/questions/options/{questionId}";
string subjectCriteriaUrl="questions/subjectcriteria/{questionId}";
string testQuestionsUrl="/testquestions/tests/{testId}";

string testStartTimesettingUrl="/test/setstarttime";
string testEndTimesettingUrl="/test/setendtime";




string InterviewedCandidatesInfoUrl="/interviewedcandidates";
string InterviewedCandidatesSubjectsUrl="/interviewedcandidatessubjects/{candidateId}";
string InterviewDetailsUrl="/interviewdetails/{interviewId}";

string candidateTestResultDetailsUrl="/candidates/{candidateId}/test/{testId}";

string createTestUrl ="/designtest";


//Using interfaces , Provider objects are  Cohesively coupled

IManager  manager = new TestManager();
IQuestionBank questionBank=new QuestionBank();


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
   List<EvaluationCriteria> evaluationCriterias = manager.GetEvalutionCriterias();
   return evaluationCriterias;
});

app.MapGet(criteriaBySubjectUrl,(int subjectId)=>{
   List<EvaluationCriteria> evaluationCriterias = manager.GetEvalutionCriteriasBySubject(subjectId);
   return evaluationCriterias;
});

app.MapGet(testQuestionsUrl,(int testId)=>{
   List<Question> questions = manager.GetTestQuestion(testId);
   return questions;
});

app.MapGet(apiTestUrl,()=>{
   List<Test> tests = manager.GetAllTests();
   return tests;
});

app.MapGet(InterviewDetailsUrl,(int interviewId)=>{
   InterviewDetails interviewInfo = manager.GetInterviewDetails(interviewId);
   return interviewInfo;
});

app.MapGet(InterviewedCandidatesInfoUrl,()=>{
   List<InterviewedCandidates> InterviewCandidates = manager.GetAllInterviewedCandidatesInfo();
   return InterviewCandidates;
});

app.MapGet(InterviewedCandidatesSubjectsUrl,(int candidateId)=>{
   List<InterviewedCandidates> InterviewCandidatesSubjects = manager.GetInterviewedCandidatesSubjects(candidateId);
   return InterviewCandidatesSubjects;
});

app.MapGet(apiQuestionsUrl,(int testId)=>{
    List<TestQuestion> questions= manager.GetQuestions(testId);
    return questions;
});

app.MapGet(candidateTestResultUrl,(int candidateId,int testId )=>{
    int score=  manager.GetCandidateScore(candidateId,testId);  
    return score;
});

app.MapGet(allQuestionsAPI,()=>{         
    List<QuestionTitle> allQuestions = questionBank.GetAllQuestions();
    return allQuestions;
});

app.MapGet(allQuestionsBySubjectUrl,(int subjectId)=>{
        List<SubjectQuestion> questions = questionBank.GetQuestionsBySubject(subjectId);
        return questions;
});


app.MapGet(criteria,(string subject , int questionid)=>{
        string criteria = manager.GetCriteria(subject ,questionid);
        return criteria;
});


app.MapGet(testSubjectCriteriaAPI,(int subjectId,int criteriaId)=>{
        List<QuestionDetails> questions = questionBank.GetQuestionsBySubjectAndCriteria(subjectId,criteriaId);
        return questions;
});

app.MapGet(question,(string subject , int questionid)=>{
        TestQuestion question = manager.GetQuestion(subject ,questionid);
        return question;
});

app.MapGet(questionUrl,(int questionId)=>{
       Question question=questionBank.GetQuestion(questionId);
       return question;
});

app.MapGet(candidateTestScoreUrl,(int candidateId , int testId)=>{
        int score = manager.GetCandidateTestScore(candidateId ,testId);
        return score;
});

app.MapPost(testStartTimesettingUrl,(CandidateTestTime test)=>{
     bool status=manager.SetTestStartTime(test.CandidateId,test.TestId, test.Time);
     return status;
});

app.MapPost(apiCandidateTestAnswersUrl,(int candidateId,List<CandidateAnswer> answers)=>{
    bool status=manager.InsertCandidateAnswers(candidateId,answers);
    return status;
});


app.MapPost(deleteTestQuestion,(int[] testQuestions)=>{
    bool status=manager.DeleteQuestion(testQuestions);
    return status;
});


app.MapPost(insertnewquestionurl,(NewQuestion ques)=>{
    bool status=manager.InsertQuestion(ques);
    return status;
    
});

app.MapPost(insertnewcriteriaurl,(NewCriteria criteria)=>{
    bool status=manager.InsertCriteria(criteria);
    return status;
    
});

app.MapPut(testEndTimesettingUrl,( CandidateTestTime test)=>{
     bool status=manager.SetTestEndTime(test.CandidateId,test.TestId, test.Time);
     return status;
});

app.MapPut(subjectCriteriaUrl,( int questionId,Question question)=>{
     bool status=questionBank.UpdateSubjectCriteria(questionId,question);
     return status;
});


app.MapPut(updateQuestionOptions,(int questionId, Question options)=>{
     bool status=questionBank.UpdateQuestionOptions(questionId,options);
     return status;
});


app.MapPut(UpdateCriteria,(int evaluationCriteriaId,int questionId)=>{
    bool status=manager.UpdateCriteria(evaluationCriteriaId,questionId);
    return status;
});


app.MapPut(updateAnswer,(Question answer,int questionId)=>{
    bool status=questionBank.UpdateAnswer(answer,questionId);
    return status;   
});

app.MapGet(candidateTestResultDetailsUrl,(int candidateId , int testId )=>{
         CandidateResultDetails candidateResult= manager.CandidateTestResultDetails(candidateId ,testId);
        return candidateResult;
});


app.MapPost(createTestUrl,(Test newTest)=>{
    bool status=manager.CreateTest(newTest);
    return status;
});

// app.MapGet("/interviewdetails",()=>{
//         InterviewDetails details=new InterviewDetails{
//             Id=12,
//             InterviewDate="25/3/2024",
//             SMETitle="Sarika Patil",
//             InterviewTitle="Paragati Bangar",
//             Subject="Java" ,
//             InterviewTime="5:56"  ,
//             Criterias=[ "Object Oriented Programming", "Multithreading", "File IO", "Database Programming"]
//         };
//     return details;
// });

app.Run();