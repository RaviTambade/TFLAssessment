using MySql.Data.MySqlClient;
using System.Data;
using Assessment.Entities;
using Assessment.Repositories;

var builder = WebApplication.CreateBuilder(args);
//services configuration


builder.Services.AddCors();
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

builder.Services.AddControllers();

var app = builder.Build();
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
string apiCandateTestAnswersUrl="/answersheet/candidates/{candidateId}";
string allQuestionsAPI="/questions";
string apiQuestionsUrl="/questions/tests/{testId}";
string question ="/questions/subjects/{subject}/questions/{questionid}";
string allQuestionsBySubjectUrl="/questions/subjects/{subjectid}";
string testSubjectCriteriaAPI = "/questions/subjects/{subjectId}/criterias/{criteriaId}";
string insertnewquestionurl="/question";
string insertnewcriteriaurl="/criteria";

string candidateTestResultUrl="/result/candidates/{candidateId}/test/{testId}";

string apiSubjectsUrl="/subjects";
string criteria ="/subject/{subject}/question/{questionId}";
string updateAnswer="/questions/answers/{questionId}";
string questionUrl="/questions/{questionId}";
string updateQuestionOptions="/questions/options/{questionId}";

//string allQuestionsByCategoryAPI="/questions/subjects/{subjectId}";

string apiTestUrl="/tests";
string testStartTimesettingUrl="/test/setstarttime";
string testEndTimesettingUrl="/test/setendtime";

string apiCriteriaUrl="/criteria";
string criteriaBySubjectUrl="/criterias/subjects/{subjectId}";
string UpdateCriteria="/";


TestManager manager = new TestManager();

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
    List<TestQuestion> questions= manager.GetQuestions(testId);
    return questions;
});

app.MapGet(candidateTestResultUrl,(int candidateId,int testId )=>{
 int score=  manager.GetCandidateScore(candidateId,testId);  
  return score;
});

app.MapPost(testStartTimesettingUrl,(CandidateTestTime test)=>{
     bool status=manager.SetTestStartTime(test.CandidateId,test.TestId, test.Time);
     return status;
});

app.MapPut(testEndTimesettingUrl,( CandidateTestTime test)=>{
     bool status=manager.SetTestEndTime(test.CandidateId,test.TestId, test.Time);
     return status;
});

app.MapPut(updateQuestionOptions,(int questionId, Question options)=>{
     QuestionBank qBank=new QuestionBank();
     bool status=qBank.UpdateQuestionOptions(questionId,options);
     return status;
});


app.MapGet(allQuestionsAPI,()=>{     
        QuestionBank qBank=new QuestionBank();
        List<QuestionTitle> allQuestions = qBank.GetAllQuestions();
        return allQuestions;
});

app.MapGet(allQuestionsBySubjectUrl,(int subjectId)=>{
        QuestionBank questionBank=new QuestionBank();
        List<SubjectQuestion> questions = questionBank.GetQuestionsBySubject(subjectId);
        return questions;
});


app.MapGet(criteria,(string subject , int questionid)=>{
        string criteria = manager.GetCriteria(subject ,questionid);
        return criteria;
});

app.MapPost(insertnewquestionurl,(NewQuestion ques)=>{
    bool status=manager.InsertQuestion(ques);
    return status;
    
});

app.MapPost(insertnewcriteriaurl,(NewCriteria criteria)=>{
    bool status=manager.InsertCriteria(criteria);
    return status;
    
});


app.MapGet(testSubjectCriteriaAPI,(int subjectId,int criteriaId)=>{
        QuestionBank question=new QuestionBank();
        List<QuestionDetails> questions = question.GetQuestionsBySubjectAndCriteria(subjectId,criteriaId);
        return questions;
});

app.MapGet(question,(string subject , int questionid)=>{
        TestQuestion question = manager.GetQuestion(subject ,questionid);
        return question;
});


app.MapGet(questionUrl,(int questionId)=>{
       QuestionBank questionBank=new QuestionBank();
       Question question=questionBank.GetQuestion(questionId);
       return question;
});


app.MapPut(UpdateCriteria,(int evaluationCriteriaId,int questionId)=>{
    bool status=manager.UpdateCriteria(evaluationCriteriaId,questionId);
    return status;
    
});


app.MapPut(updateAnswer,(Question answer,int questionId)=>{

    QuestionBank question =new QuestionBank();
    bool status=question.UpdateAnswer(answer,questionId);
    return status;
    
});


app.Run();