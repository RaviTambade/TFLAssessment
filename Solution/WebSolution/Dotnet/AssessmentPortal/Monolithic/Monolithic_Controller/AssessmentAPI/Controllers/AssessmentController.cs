using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;

using Transflower.TFLAssessment.Entities;
using  Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Entities.Models;

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
    
    //http://localhost:5238/api/assessment/1
    [HttpGet("{id}")]
    public async Task<IActionResult> GetDetails(int id)
    {
        Assessment theAssessment = await _svc.GetDetails(id);
        _logger.LogInformation("Get details method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(theAssessment);
    }

    // GET: api/assessment
    [HttpGet("creationdate/fromDate/{fromDate}/toDate/{toDate}")]
    public async Task<IActionResult> GetAll(DateTime fromDate, DateTime toDate)
    {
        List<Assessment> assessments = await _svc.GetAll(fromDate, toDate);
        _logger.LogInformation("Get all Assessments method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(assessments);
    }

    // GET: get all assessments
    //http://localhost:5238/api/assessment/assessments
    [HttpGet("assessments")]
    [Authorize(Roles = "sme,admin")]
    public async Task<IActionResult> GetAllAssesment()
    {
        List<Assessment> assessments = await _svc.GetAllTests();
        if (assessments == null || assessments.Count == 0)
        {
            _logger.LogWarning("No assessments found at {DT}", DateTime.UtcNow.ToLongTimeString());
            return NotFound("No assessments found.");
        }
        _logger.LogInformation("Get all tests method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(assessments);
    }

    //http://localhost:5238/api/assessment/employees
    [HttpGet("employees")]
    public async Task<IActionResult> GetAllEmployees()
    {
        List<Employee> employees = await _svc.GetAllEmployees();
        _logger.LogInformation("Get all employee method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(employees);
    }

    //http://localhost:5238/api/assessment/employee/{userId}
    [HttpGet("employee/{userId}")]
    public async Task<IActionResult> GetEmployeeById(int userId)
    {
        Employee employee = await _svc.GetEmployeeById(userId);
        _logger.LogInformation("Get all employee method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(employee);
    }

    //http://localhost:5238/api/assessment/subjects
    [HttpGet("subjects")]
    public async Task<IActionResult> GetAllSubjects()
    {
        List<Subject> subjects = await _svc.GetAllSubjects();
        _logger.LogInformation("Get all subject method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(subjects);
    }


    //http://localhost:5238/api/assessment/concepts
    [HttpGet("concepts")]
    public async Task<IActionResult> GetConcepts()
    {
        List<Concepts> concepts = await _svc.GetConcepts();
        _logger.LogInformation("Get evaluation Concepts method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(concepts);
    }

    //http://localhost:5238/api/assessment/concepts/subjects/1
    [HttpGet("concepts/subjects/{subjectId}")]
    public async Task<IActionResult> GetConceptsBySubject(int subjectId)
    {
        List<Concepts> concepts = await _svc.GetConceptsBySubject(subjectId);
        _logger.LogInformation("Get  evaluation Concepts by subject method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(concepts);
    }



    //http://localhost:5238/api/assessment/subjectexperts/2
    [HttpGet("subjectexperts/{smeId}")]
    public async Task<IActionResult> GetAllBySubjectMatterExpert(int smeId)
    {
        List<Assessment> assessments = await _svc.GetAllBySubjectMatterExpert(smeId);
        _logger.LogInformation("Get all subject matter experties method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return  Ok(assessments);
    }

    //http://localhost:5238/api/Assessment/createtest
    [HttpPost("createtest")]
    public async Task<IActionResult> CreateTest([FromBody] CreateTestRequest request)
    {
        Console.WriteLine("Inside Create Test Controller");
        bool status = await _svc.CreateTest(request);
        _logger.LogInformation("Create test method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        if (status)
        {
            return Ok(new { message = "Test created successfully" });
        }
        else
        {
            return BadRequest(new { message = "Failed to create test" });
        }
    }

    //http://localhost:5238/api/Assessment/addquestion/assessments/1/questions/10
    [HttpPost("addquestion/assessments/{assessmentId}/questions/{questionId}")]
    public async Task<IActionResult> AddQuestion(int assessmentId, int questionId)
    {
        bool status = await _svc.AddQuestion(assessmentId, questionId);
        _logger.LogInformation("Add question method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }


    // http://localhost:5238/api/Assessment/addmultiplequestions/assessments/1
    [HttpPost("addmultiplequestions/assessments/{assessmentId}")]
    public async Task<IActionResult> AddQuestions(int assessmentId, List<QuestionBank> questions)
    {
        // Log the incoming data for debugging
        _logger.LogInformation("Received Questions: {questions}", JsonConvert.SerializeObject(questions));

        bool status = await _svc.AddQuestions(assessmentId, questions);
        _logger.LogInformation("Add multiple questions method invoked at {DT}", DateTime.UtcNow.ToLongTimeString());

        return Ok(status);
    }

    //http://localhost:5238/api/Assessment/1/questions/9
    [HttpDelete("{assessmentId}/questions/{questionId}")]
    public async Task<IActionResult> RemoveQuestion(int assessmentId, int questionId)
    {
        bool status = await _svc.RemoveQuestion(assessmentId, questionId);
        _logger.LogInformation("Remove question method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    //http://localhost:5238/api/Assessment/1/duration/40
    [HttpPut("{assessmentId}/duration/{duration}")]
    public async Task<IActionResult> ChangeDuration(int assessmentId, string duration)
    {
        bool status = await _svc.ChangeDuration(assessmentId, duration);
        _logger.LogInformation("Change duration method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    //http://localhost:5238/api/Assessment/1/reschedule/2024-01-01
    [HttpPut("{assessmentId}/reschedule/{date}")]
    public async Task<IActionResult> Reschedule(int assessmentId, DateTime date)
    {
        bool status = await _svc.Reschedule(assessmentId, date);
        _logger.LogInformation("Reschedule method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    //http://localhost:5238/api/Assessment/deletequestions
    [HttpDelete("deletequestions")]
    public async Task<IActionResult> RemoveQuestions(int[] testQuestions)
    {
        bool status = await _svc.RemoveQuestions(testQuestions);
        _logger.LogInformation("Remove questions method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    // add test and there questions
    //http://localhost:5238/api/Assessment/addtest
    [HttpPost("addtest")]
    [Authorize(Roles = "sme")]
    public async Task<IActionResult> AddTest([FromBody] CreateTestWithQuestions request)
    {
        var testId = await _svc.CreateTestWithQuestionsAsync(request);
        if (testId == 0)
        {
            _logger.LogError("Failed to create test at {DT}", DateTime.UtcNow.ToLongTimeString());
            return BadRequest(new { message = "Failed to create test" });
        }
        return Ok(new { message = "Test created", testId });
    }

    //http://localhost:5238/api/Assessment/allquestionsbysubject/1
    [HttpGet("allquestionsbysubject/{subjectId}")]
    public async Task<IActionResult> GetAllQuestionsBySubject(int subjectId)
    {
        List<SubjectQuestions> questions = await _svc.GetAllQuestionsBySubject(subjectId);
        if (questions == null || questions.Count == 0)
        {
            _logger.LogWarning("No questions found for subject ID {SubjectId} at {DT}", subjectId, DateTime.UtcNow.ToLongTimeString());
            return NotFound(new { message = "No questions found for the specified subject." });
        }
        _logger.LogInformation("Get all questions by subject method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }

    //http://localhost:5238/api/Assessment/getsme/1
    [HttpGet("getsme/{subjectId}")]
    public async Task<IActionResult> GetSmeBySubject(int subjectId)
    {
        List<Employee> smeList = await _svc.GetSmeBySubject(subjectId);
        if (smeList == null || smeList.Count == 0)
        {
            _logger.LogWarning("No SME found for subject ID {SubjectId} at {DT}", subjectId, DateTime.UtcNow.ToLongTimeString());
            return NotFound(new { message = "No SME found for the specified subject." });
        }
        _logger.LogInformation("Get SME by subject method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(smeList);
    }

    //http://localhost:5238/api/Assessment/getalltest/from/2024-01-01/to/2024-12-31
    [HttpGet("getalltest/from/{fromDate}/to/{toDate}")]
    [Authorize(Roles = "admin")]
    public async Task<IActionResult> GetAllTests(DateTime fromDate, DateTime toDate)
    {
        List<Test> assessments = await _svc.GetAllTests(fromDate, toDate);
        if (assessments == null || assessments.Count == 0)
        {
            _logger.LogWarning("No tests found between {FromDate} and {ToDate} at {DT}", fromDate, toDate, DateTime.UtcNow.ToLongTimeString());
            return NotFound(new { message = "No tests found for the specified date range." });
        }
        _logger.LogInformation("Get all tests method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(assessments);
    }

    // Get all test details by test ID
    //http://localhost:5238/api/Assessment/testdetails/{testId}
    [HttpGet("testdetails/{testId}")]
    public async Task<IActionResult> GetTestDetails(int testId)
    {
        var testDetails = await _svc.GetTestDetails(testId);
        if (testDetails == null)
        {
            _logger.LogWarning("No test details found for test ID {TestId} at {DT}", testId, DateTime.UtcNow.ToLongTimeString());
            return NotFound(new { message = "No test details found for the specified test ID." });
        }
        _logger.LogInformation("Get test details method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(testDetails);
    }
    //evaluation criteria id give me all question base on evaluation criteria
    //http://localhost:5238/api/Assessment/questionsbyconcepts/{conceptid}
    [HttpGet("questionsbyconcepts/{conceptid}")]
    public async Task<IActionResult> GetQuestionsByConceptId(int conceptid)
    {
        var questionDetails = await _svc.GetQuestionsByConceptId(conceptid);
        if (questionDetails == null)
        {
            _logger.LogWarning("No test details found for test ID {TestId} at {DT}", conceptid, DateTime.UtcNow.ToLongTimeString());
            return NotFound(new { message = "No test details found for the specified test ID." });
        }
        _logger.LogInformation("Get test details method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(questionDetails);
    }
    // update question
    //http://localhost:5238/api/Assessment/updatequestion/{questionId}
    [HttpPut("updatequestion/{questionId}")]
    public async Task<IActionResult> UpdateQuestion(int questionId, [FromBody] Question question)
    {
        if (question == null || question.Id != questionId)
        {
            _logger.LogError("Invalid question data provided at {DT}", DateTime.UtcNow.ToLongTimeString());
            return BadRequest(new { message = "Invalid question data provided." });
        }

        // Assuming the service has an UpdateQuestion method
        bool status = await _svc.UpdateQuestion(question);
        if (!status)
        {
            _logger.LogError("Failed to update question with ID {QuestionId} at {DT}", questionId, DateTime.UtcNow.ToLongTimeString());
            return BadRequest(new { message = "Failed to update question." });
        }

        _logger.LogInformation("Question with ID {QuestionId} updated successfully at {DT}", questionId, DateTime.UtcNow.ToLongTimeString());
        return Ok(new { message = "Question updated successfully." });
    }

    //update test
    //http://localhost:5238/api/Assessment/updateteststatus/{testId}
    [HttpPut("updateteststatus/{testId}")]
    public async Task<IActionResult> UpdateTestStatus(int testId, [FromBody] TestStatusUpdate status)
    {

        // Assuming the service has an UpdateTest method
        bool status1 = await _svc.UpdateTestStatus(testId, status);
        // if (!status1)
        // {
        //     _logger.LogError("Failed to update test with ID {TestId} at {DT}", testId, DateTime.UtcNow.ToLongTimeString());
        //     return BadRequest(new { message = "Failed to update test." });
        // }

        _logger.LogInformation("Test with ID {TestId} updated successfully at {DT}", testId, DateTime.UtcNow.ToLongTimeString());
        return Ok(new { message = "Test updated successfully." });
    }



    // insert students in test with candidateid, testid, scheduledstart, scheduledend, status, rescheduledon, remarks

    //http://localhost:5238/api/Assessment/addemployees
    [HttpPost("addemployees")]
    public async Task<IActionResult> AddEmployeesToTest([FromBody] TestAssignmentRequest request)
    {
        if (request.EmployeeIds == null || request.EmployeeIds.Count == 0)
        {
            return BadRequest("No employees selected.");
        }

        bool status = await _svc.AddEmployeesToTest(request);
        if (!status)
        {
            _logger.LogError("Failed to add employees to test at {DT}", DateTime.UtcNow.ToLongTimeString());
            return BadRequest(new { message = "Failed to add employees to test." });
        }

        _logger.LogInformation("Employees added to test successfully at {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(new { message = "Employees added to test successfully." });
    }

    // get all test by employee id
    // http://localhost:5238/api/Assessment/alltestbyempid/{empId}
    [HttpGet("alltestbyempid/{empId}")]
    public async Task<IActionResult> GetAllTestByEmpId(int empId)
    {
        if (empId <= 0){
            _logger.LogError("Invalid employee ID provided at {DT}", DateTime.UtcNow.ToLongTimeString());
            return BadRequest(new { message = "Invalid employee ID provided." });
        }

        List<TestEmployeeDetails> testDetails = await _svc.GetAllTestByEmpId(empId);
        if (testDetails == null || testDetails.Count == 0){
            _logger.LogWarning("No test details found for employee at {DT}", DateTime.UtcNow.ToLongTimeString());
            return NotFound(new { message = "No test details found for the employee." });
        }
        _logger.LogInformation("Get all test by employee method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(testDetails);
    }
}
