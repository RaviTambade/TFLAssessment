using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Implementations;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Services.Implementations;
using Transflower.TFLAssessment.Services.Interfaces;



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
string setPassingLevel="/tests/{testId}/passinglevel/{passingLevel}";
//
string updateAnswer = "/question/{id}/updateanswer/{answerKey}"; 
string apiCandidateTestAnswersUrl = "/answersheet/candidates/{candidateId}";   

// string apiQuestionsUrl = "/questions/tests/{testId}";

string question = "/questions/subjects/{subject}/questions/{questionid}";
string allQuestionsBySubjectUrl = "/questions/subjects/{subjectid}";
string testSubjectCriteriaAPI = "/questions/subjects/{subjectId}/criterias/{criteriaId}";
string insertnewquestionurl = "/insert/question";
string insertnewcriteriaurl = "/criteria";

//pending
string deleteTestQuestion = "/testquestions";
string candidateTestScoreUrl = "/score/candidates/{candidateId}/tests/{testId}";
string criteriaBySubjectUrl = "/criterias/subjects/{subjectId}";
string criteria = "/criteria/subject/{subject}/question/{questionId}";//question controller reurn only criteria title
string questionUrl = "/questions/{questionId}";
string updateQuestionOptions = "/update/options/question/{questionId}";  //check returntype
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
string apiAssessmentUrl="/{assessmentId}";


// Using interfaces , Provider objects are  Cohesively coupledcreate test
IAssessmentRepository repo = new AssessmentRepository();
IAssessmentService service = new AssessmentService(repo);
// IQuestionBankService questionBank = new QuestionBankService();

//IAssessmentRepository manager = new AssessmentRepository();
// IQuestionBankRepository questionBank = new QuestionBankRepository();
// IInterviewRepository interviewManager = new InterviewRepository();
// IEvaluationCriteriaRepository criteriaManager = new EvaluationCriteriaRepository();

// IResultRepository resultManager = new ResultRepository();

// //API Listners
app.MapGet(apiAssessmentUrl, async (int assessmentId) =>
{
   var assessment = await service.GetDetails(assessmentId);
   return assessment;
});

// app.MapGet(apiSubjectsUrl, () =>
// {
//    List<Subject> subjects = manager.GetAllSubjects();
//    return subjects;
// });


// app.MapGet(apiCriteriaUrl, () =>
// {
//    List<EvaluationCriteria> evaluationCriterias = criteriaManager.GetEvalutionCriterias();
//    return evaluationCriterias;
// });

// app.MapGet(criteriaBySubjectUrl, (int subjectId) =>
// {
//    List<EvaluationCriteria> evaluationCriterias = criteriaManager.GetEvalutionCriteriasBySubject(subjectId);
//    return evaluationCriterias;
// });

// // app.MapGet(apiTestUrl, () =>
// // {
// //    List<Test> tests = manager.GetAllTests();
// //    return tests;
// // });

// app.MapGet(InterviewDetailsUrl, (int interviewId) =>
// {
//    InterviewDetails interviewInfo = interviewManager.GetInterviewDetails(interviewId);
//    return interviewInfo;
// });

// // app.MapGet(InterviewedCandidatesInfoUrl,()=>{
// //    List<InterviewCandidateDetails> InterviewCandidates = mockTestManager.GetAllInterviewedCandidatesInfo();
// //    return InterviewCandidates;
// // });

// app.MapGet(InterviewedCandidatesSubjectsUrl, (int candidateId) =>
// {
//    List<InterviewCandidateDetails> InterviewCandidatesSubjects = interviewManager.GetInterviewedCandidatesSubjects(candidateId);
//    return InterviewCandidatesSubjects;
// });

// // app.MapGet(apiQuestionsUrl, (int testId) =>
// // {
// //    List<TestQuestion> questions = mockTestManager.GetQuestions(testId);
// //    return questions;
// // });


// app.MapGet(allQuestionsAPI, () =>
// {
//    List<QuestionTitle> allQuestions = questionBank.GetAllQuestions();
//    return allQuestions;
// });

// app.MapGet(allQuestionsBySubjectUrl, (int subjectId) =>
// {
//    List<SubjectQuestion> questions = questionBank.GetQuestionsBySubject(subjectId);
//    return questions;
// });


// app.MapGet(criteria, (string subject, int questionid) =>
// {
//    string criteria = criteriaManager.GetCriteria(subject, questionid);
//    return criteria;
// });


// app.MapGet(testSubjectCriteriaAPI, (int subjectId, int criteriaId) =>
// {
//    List<QuestionDetails> criterias = criteriaManager.GetQuestionsBySubjectAndCriteria(subjectId, criteriaId);
//    return criterias;
// });

// // app.MapGet(question, (string subject, int questionid) =>
// // {
// //    TestQuestion question = mockTestManager.GetQuestion(subject, questionid);
// //    return question;
// // });

// app.MapGet(questionUrl, (int questionId) =>
// {
//    Question question = questionBank.GetQuestion(questionId);
//    return question;
// });

// app.MapGet(candidateTestScoreUrl, (int candidateId, int testId) =>
// {
//    int score = resultManager.GetCandidateTestScore(candidateId, testId);
//    return score;
// });

// // app.MapPost(testStartTimesettingUrl, (CandidateTestTime test) =>
// // {
// //    bool status = mockTestManager.SetCandidateTestStartTime(test.CandidateId, test.TestId, test.Time);
// //    return status;
// // });

// // app.MapPost(apiCandidateTestAnswersUrl, (int candidateId, List<CandidateAnswer> answers) =>
// // {
// //    bool status = mockTestManager.InsertCandidateAnswers(candidateId, answers);
// //    return status;
// // });


// // app.MapPost(deleteTestQuestion, (int[] testQuestions) =>
// // {
// //    bool status = mockTestManager.DeleteQuestion(testQuestions);
// //    return status;
// // });


// // app.MapPost(insertnewquestionurl, (NewQuestion ques) =>
// // {
// //    bool status = mockTestManager.InsertQuestion(ques);
// //    return status;

// // });

// app.MapPost(insertnewcriteriaurl, (NewCriteria criteria) =>
// {
//    bool status = criteriaManager.InsertCriteria(criteria);
//    return status;

// });

// // app.MapPut(testEndTimesettingUrl, (CandidateTestTime test) =>
// // {
// //    bool status = mockTestManager.SetCandidateTestEndTime(test.CandidateId, test.TestId, test.Time);
// //    return status;
// // });

// app.MapPut(subjectCriteriaUrl, (int criteriaId, int questionId) =>
// {
//    bool status = criteriaManager.UpdateCriteria(criteriaId, questionId);
//    return status;
// });

// app.MapPut(setPassingLevel, (int testId, int passingLevel) =>
// {
//    bool status = manager.SetPassingLevel(testId, passingLevel);
//    return status;
// });



// app.MapPut(updateQuestionOptions, (int questionId, Question options) =>
// {
//    bool status = questionBank.UpdateQuestionOptions(questionId, options);
//    return status;
// });


// app.MapPut(updateAnswer, (int id,char answerKey) =>
// {
//    bool status = questionBank.UpdateAnswer(id,answerKey);
//    return status;
// });


// app.MapGet(candidateTestResultDetailsUrl, (int candidateId, int testId) =>
// {
//    CandidateResultDetails candidateResult = resultManager.CandidateTestResultDetails(candidateId, testId);
//    return candidateResult;
// });


// // app.MapPost(createTestUrl, (Test newTest) =>
// // {
// //    bool status = mockTestManager.CreateTest(newTest);
// //    return status;
// // });

// app.MapPut(resheduleInterviewUrl, (int interviewId, DateTime date) =>
// {
//    bool status = interviewManager.ReschduleInterview(interviewId, date);
//    return status;
// });

// app.MapPut(ChangeInterviewerUrl, (int interviewId, int smeId) =>
// {
//    bool status = interviewManager.ChangeInterviewer(interviewId, smeId);
//    return status;
// });

// app.MapDelete(CancelInterviewUrl, (int interviewId) =>
// {
//    bool status = interviewManager.CancelInterview(interviewId);
//    return status;
// });

app.Run();