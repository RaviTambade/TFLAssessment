using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using  Transflower.TFLAssessment.Services.Interfaces;
namespace Transflower.TFLAssessment.Controllers;

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/[controller]")]
public class AssessmentController : ControllerBase
{ 
   private readonly IAssessmentService _svc;
   private readonly ILogger<AssessmentController> _logger;
    public AssessmentController(IAssessmentService service, ILogger<AssessmentController> logger)
    {
        // Initialize with some sample data
       _svc = service;  
       _logger = logger;

    }
    
    // GET: api/assessment
    [HttpGet("creationdate/fromDate/{fromDate}/toDate/{toDate}")]
    public async Task<IActionResult> GetAll(DateTime fromDate, DateTime toDate)
    {
        List<Assessment> assessments =await _svc.GetAll( fromDate,  toDate);
        _logger.LogInformation("Get all Assessments method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(assessments);
    }

    // GET: get all assessments
    //http://localhost:5151/api/assessment/assessments
    [HttpGet("assessments")]
    public async Task<IActionResult>  GetAllAssesment()
    {
        List<Assessment> assessments =await _svc.GetAllTests();
        _logger.LogInformation("Get all tests method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(assessments);
    }
  
    //http://localhost:5151/api/assessment/employees
    
    [HttpGet("employees")]
    public async Task<IActionResult>  GetAllEmployees()
    {
        List<Employee> employees =await _svc.GetAllEmployees();
        _logger.LogInformation("Get all employee method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(employees);
    }
  
    //http://localhost:5151/api/assessment/subjects
    [HttpGet("subjects")]
    public async Task<IActionResult>  GetAllSubjects()
    {
        List<Subject> subjects =await _svc.GetAllSubjects();
        _logger.LogInformation("Get all subject method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(subjects);
    }


    //http://localhost:5151/api/assessment/criterias
    [HttpGet("criterias")]
    public async Task<IActionResult>  GetEvalutionCriterias()
    {
        List<EvaluationCriteria> criterias =await _svc.GetEvalutionCriterias();
         _logger.LogInformation("Get evaluation criteria method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(criterias);
    }

    //http://localhost:5151/api/assessment/criterias/subjects/1
    [HttpGet("criterias/subjects/{subjectId}")]
    public async Task<IActionResult>  GetEvalutionCriteriasBySubject(int subjectId)
    {
        List<EvaluationCriteria> criterias =await _svc.GetEvalutionCriteriasBySubject(subjectId);
         _logger.LogInformation("Get  evaluation criteria by subject method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(criterias);
    }

    //http://localhost:5151/api/assessment/1
    [HttpGet("{id}")]
    public async Task<IActionResult>  GetDetails(int id)
    {
        Assessment theAssessment=await _svc.GetDetails(id);
         _logger.LogInformation("Get details method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(theAssessment);
    }

    //http://localhost:5151/api/assessment/subjectexperts/2
    [HttpGet("subjectexperts/{smeId}")]
    public async Task<IActionResult>  GetAllBySubjectMatterExpert(int smeId)
    {
        List<Assessment> assessments=await _svc.GetAllBySubjectMatterExpert(smeId);
        _logger.LogInformation("Get all subject matter experties method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(assessments);
    }

    //http://localhost:5151/api/Assessment/createtest
    [HttpPost("createtest")]
    public async Task<IActionResult> CreateTest( Assessment assessment)
    {
        Console.WriteLine("Inside Create Test Controller");
        bool status= await _svc.CreateTest(assessment);
        _logger.LogInformation("Create test method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    
    //http://localhost:5151/api/Assessment/addquestion/assessments/1/questions/10
    [HttpPost("addquestion/assessments/{assessmentId}/questions/{questionId}")]
    public async Task<IActionResult>  AddQuestion(int assessmentId,int questionId)
    {
        bool status=await _svc.AddQuestion(assessmentId,questionId);
        _logger.LogInformation("Add question method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    
    // http://localhost:5151/api/Assessment/addmultiplequestions/assessments/1
    [HttpPost("addmultiplequestions/assessments/{assessmentId}")]
    public async Task<IActionResult>  AddQuestions(int assessmentId,List<TestQuestion> questions)
    {
        bool status=await _svc.AddQuestions(assessmentId, questions);
        _logger.LogInformation("Add multiple questions method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    //http://localhost:5151/api/Assessment/1/questions/9
    [HttpDelete("{assessmentId}/questions/{questionId}")]
    public async Task<IActionResult>  RemoveQuestion(int assessmentId,int questionId)
    {
        bool status=await _svc.RemoveQuestion(assessmentId,questionId);
        _logger.LogInformation("Remove question method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    //http://localhost:5151/api/Assessment/1/duration/40
    [HttpPut("{assessmentId}/duration/{duration}")]
    public async Task<IActionResult>  ChangeDuration(int assessmentId,string duration)
    {
        bool status=await _svc.ChangeDuration(assessmentId,duration);
        _logger.LogInformation("Change duration method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    //http://localhost:5151/api/Assessment/1/reschedule/2024-01-01
    [HttpPut("{assessmentId}/reschedule/{date}")]
    public async Task<IActionResult>  Reschedule(int assessmentId,DateTime date)
    {
        bool status=await _svc.Reschedule(assessmentId,date);
        _logger.LogInformation("Reschedule method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    //http://localhost:5151/api/Assessment/deletequestions
    [HttpDelete("deletequestions")]
    public async Task<IActionResult>  RemoveQuestions(int[] testQuestions)
    {
        bool status= await _svc.RemoveQuestions(testQuestions);
        _logger.LogInformation("Remove questions method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }
}
