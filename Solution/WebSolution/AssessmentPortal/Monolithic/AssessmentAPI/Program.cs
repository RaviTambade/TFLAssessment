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



// REST API URL;
string apiEmployeesUrl = "/employees";
string allQuestionsAPI = "/questions";
string apiSubjectsUrl = "/subjects";
string apiTestUrl = "/tests";
string apiCriteriaUrl = "/criteria";
string updateAnswer = "/questions/answers/{questionId}";
string apiCandidateTestAnswersUrl = "/answersheet/candidates/{candidateId}";
string apiQuestionsUrl = "/questions/tests/{testId}";
string question = "/questions/subjects/{subject}/questions/{questionid}";
string allQuestionsBySubjectUrl = "/questions/subjects/{subjectid}";
string testSubjectCriteriaAPI = "/questions/subjects/{subjectId}/criterias/{criteriaId}";
string insertnewquestionurl = "/question";
string insertnewcriteriaurl = "/criteria";
string deleteTestQuestion = "/testquestions";
string candidateTestScoreUrl = "candidates/{candidateId}/tests/{testId}";
string candidateTestResultUrl = "/result/candidates/{candidateId}/test/{testId}";
string criteriaBySubjectUrl = "/criterias/subjects/{subjectId}";
string UpdateCriteria = "criteria/{evaluationCriteriaId}/question/{questionId}";
string criteria = "/subject/{subject}/question/{questionId}";//question controller reurn only criteria title
string questionUrl = "/questions/{questionId}";
string updateQuestionOptions = "/update/options/question/{questionId}";  //check returntype
string testQuestionsUrl = "/questions/tests/{testId}";
string testStartTimesettingUrl = "/setstarttime/{candidateId}/tests/{testId}";
string testEndTimesettingUrl = "setendtime/{candidateId}/tests/{testId}";
string candidateTestResultDetailsUrl = "/candidates/{candidateId}/test/{testId}";
string resheduleInterviewUrl = "/resheduleinterview/interviewId/{interviewid}/date/{date}";
string InterviewedCandidatesInfoUrl = "/interviewedcandidates";   //pending
string subjectCriteriaUrl = "questions/subjectcriteria/{criteriaId}/questions/{questionId}";   //pending
string InterviewedCandidatesSubjectsUrl = "/interviewedcandidatessubjects/{candidateId}";  //pending
string InterviewDetailsUrl = "/interviewdetails/{interviewId}";    //pending   
string createTestUrl = "/designtest";   //pending
string ChangeInterviewerUrl = "/changeInterviewer/interviewId/{interviewid}/smeId/{smeid}";  //pending
string CancelInterviewUrl = "/cancelInterview/interviewid/{interviewid}";  //pending


// Using interfaces , Provider objects are  Cohesively coupled


ITestManager manager = new TestManager();
IQuestionBankManager questionBank = new QuestionBankManager();
IInterviewManager interviewManager = new InterviewManager();
IEvaluationCriteriaManager criteriaManager = new EvaluationCriteriaManager();

IResultManager resultManager = new ResultManager();
//API Listners
app.MapGet(apiEmployeesUrl, () =>
{
   List<Employee> employees = manager.GetAllEmployees();
   return employees;
});

app.MapGet(apiSubjectsUrl, () =>
{
   List<Subject> subjects = manager.GetAllSubjects();
   return subjects;
});
IMockTestManager mockTestManager = new MockTestManager();

app.MapGet(apiEmployeesUrl, () =>
{
   List<Employee> employees = mockTestManager.GetAllEmployees();
   return employees;
});

app.MapGet(apiSubjectsUrl, () =>
{
   List<Subject> subjects = mockTestManager.GetAllSubjects();
   return subjects;
});

app.MapGet(apiCriteriaUrl, () =>
{
   List<EvaluationCriteria> evaluationCriterias = criteriaManager.GetEvalutionCriterias();
   return evaluationCriterias;
});

app.MapGet(criteriaBySubjectUrl, (int subjectId) =>
{
   List<EvaluationCriteria> evaluationCriterias = criteriaManager.GetEvalutionCriteriasBySubject(subjectId);
   return evaluationCriterias;
});

app.MapGet(testQuestionsUrl, (int testId) =>
{
   List<Question> questions = mockTestManager.GetTestQuestions(testId);
   return questions;
});

app.MapGet(apiTestUrl, () =>
{
   List<Test> tests = mockTestManager.GetAllTests();
   return tests;
});

app.MapGet(InterviewDetailsUrl, (int interviewId) =>
{
   InterviewDetails interviewInfo = interviewManager.GetInterviewDetails(interviewId);
   return interviewInfo;
});

// app.MapGet(InterviewedCandidatesInfoUrl,()=>{
//    List<InterviewCandidateDetails> InterviewCandidates = mockTestManager.GetAllInterviewedCandidatesInfo();
//    return InterviewCandidates;
// });

app.MapGet(InterviewedCandidatesSubjectsUrl, (int candidateId) =>
{
   List<InterviewCandidateDetails> InterviewCandidatesSubjects = interviewManager.GetInterviewedCandidatesSubjects(candidateId);
   return InterviewCandidatesSubjects;
});

app.MapGet(apiQuestionsUrl, (int testId) =>
{
   List<TestQuestion> questions = mockTestManager.GetQuestions(testId);
   return questions;
});

app.MapGet(candidateTestResultUrl, (int candidateId, int testId) =>
{
   int score = resultManager.GetCandidateScore(candidateId, testId);
   return score;
});
app.MapGet(candidateTestResultUrl, (int candidateId, int testId) =>
{
   int score = mockTestManager.GetCandidateScore(candidateId, testId);
   return score;
});

app.MapGet(allQuestionsAPI, () =>
{
   List<QuestionTitle> allQuestions = questionBank.GetAllQuestions();
   return allQuestions;
});

app.MapGet(allQuestionsBySubjectUrl, (int subjectId) =>
{
   List<SubjectQuestion> questions = questionBank.GetQuestionsBySubject(subjectId);
   return questions;
});


app.MapGet(criteria, (string subject, int questionid) =>
{
   string criteria = criteriaManager.GetCriteria(subject, questionid);
   return criteria;
});


app.MapGet(testSubjectCriteriaAPI, (int subjectId, int criteriaId) =>
{
   List<QuestionDetails> criterias = criteriaManager.GetQuestionsBySubjectAndCriteria(subjectId, criteriaId);
   return criterias;
});

app.MapGet(question, (string subject, int questionid) =>
{
   TestQuestion question = mockTestManager.GetQuestion(subject, questionid);
   return question;
});

app.MapGet(questionUrl, (int questionId) =>
{
   Question question = questionBank.GetQuestion(questionId);
   return question;
});

app.MapGet(candidateTestScoreUrl, (int candidateId, int testId) =>
{
   int score = resultManager.GetCandidateTestScore(candidateId, testId);
   return score;
});

app.MapPost(testStartTimesettingUrl, (CandidateTestTime test) =>
{
   bool status = mockTestManager.SetCandidateTestStartTime(test.CandidateId, test.TestId, test.Time);
   return status;
});

app.MapPost(apiCandidateTestAnswersUrl, (int candidateId, List<CandidateAnswer> answers) =>
{
   bool status = mockTestManager.InsertCandidateAnswers(candidateId, answers);
   return status;
});


app.MapPost(deleteTestQuestion, (int[] testQuestions) =>
{
   bool status = mockTestManager.DeleteQuestion(testQuestions);
   return status;
});


app.MapPost(insertnewquestionurl, (NewQuestion ques) =>
{
   bool status = mockTestManager.InsertQuestion(ques);
   return status;

});

app.MapPost(insertnewcriteriaurl, (NewCriteria criteria) =>
{
   bool status = criteriaManager.InsertCriteria(criteria);
   return status;

});

app.MapPut(testEndTimesettingUrl, (CandidateTestTime test) =>
{
   bool status = mockTestManager.SetCandidateTestEndTime(test.CandidateId, test.TestId, test.Time);
   return status;
});

app.MapPut(subjectCriteriaUrl, (int criteriaId, int questionId) =>
{
   bool status = criteriaManager.UpdateCriteria(criteriaId, questionId);
   return status;
});


app.MapPut(updateQuestionOptions, (int questionId, Question options) =>
{
   bool status = questionBank.UpdateQuestionOptions(questionId, options);
   return status;
});


app.MapPut(updateAnswer, (Question answer, int questionId) =>
{
   bool status = questionBank.UpdateAnswer(answer, questionId);
   return status;
});

app.MapGet(candidateTestResultDetailsUrl, (int candidateId, int testId) =>
{
   CandidateResultDetails candidateResult = resultManager.CandidateTestResultDetails(candidateId, testId);
   return candidateResult;
});


app.MapPost(createTestUrl, (Test newTest) =>
{
   bool status = mockTestManager.CreateTest(newTest);
   return status;
});

app.MapPut(resheduleInterviewUrl, (int interviewId, DateTime date, InterviewCandidateDetails details) =>
{
   bool status = interviewManager.ReschduleInterview(interviewId, date, details);
   return status;
});

app.MapPut(ChangeInterviewerUrl, (int interviewId, int smeId) =>
{
   bool status = interviewManager.ChangeInterviewer(interviewId, smeId);
   return status;
});

app.MapDelete(CancelInterviewUrl, (int interviewId) =>
{
   bool status = interviewManager.CancelInterview(interviewId);
   return status;
});

app.Run();