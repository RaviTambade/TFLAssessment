using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;
namespace backend.Controllers;

using System.Security.Cryptography.X509Certificates;
using backend.DTOs;

[ApiController]
[Route("api/[controller]")]
public class AssessmentController : ControllerBase
{
    private readonly IAssessmentsService _service;

    public AssessmentController(IAssessmentsService service)
    {
        _service = service;
    }

    [HttpGet("user/{userId}")]
    public async Task<IActionResult> GetAll(long userId)
    {
        var data = await _service.GetAllUpcomingAssessmentsService(userId); 
        return Ok(data);
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAll(bool? isActive = null)
    {
        try
        {
            var data = await _service.GetAllAssessments();
            return Ok(data);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message, stackTrace = ex.StackTrace });
        }
    }


    [HttpGet("tests")]
    public async Task<IActionResult> GetTestsAsync()
    {
        var tests = await _service.GetTestsAsync();
        return Ok(tests);
    }

    [HttpGet("students")]
    public async Task<IActionResult> GetStudentsAsync()
    {
        var students = await _service.GetStudentsAsync();
        return Ok(students);
    }

    [HttpPost("assigned")]
    public async Task<IActionResult> AssignAssessmentAsync(AssignAssessmentDto dto)
    {
        await _service.AssignAssessmentAsync(dto);
        return Ok("Assessment Assigned Successfully");
    }
    [HttpGet("questions/{assessmentId}")]
    public async Task<IActionResult> GetQuestionsByAssessmentId(int assessmentId)
    {
        var assessmentQuestions = await _service.GetAssessmentQuestions(assessmentId);
        return Ok(assessmentQuestions);
    }
    
    [HttpPost("submit")]
    public async Task<IActionResult> SaveAssessmentAnswersAsync([FromBody] AssessmentAnswersDto submission)
    {
        try
        {
            if (submission == null)
            {
                return BadRequest("Invalid data");
            }

            var result = await _service.SaveAssessmentAnswersAsync(submission);

            if (result)
            {
                return Ok(new { message = "Assessment submitted successfully" });
            }

            return StatusCode(500, "Failed to save assessment");
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpGet("{studentId}/{assessmentId}")]
    public async Task<IActionResult> GetResultData(int studentId, int assessmentId)
    {
        try
        {

            var request = new AssessmentstudenttResultDto
            {
                StudentId = studentId,
                AssessmentId = assessmentId
            };

            var result = await _service.GetResultData(request);

            if (result == null)
                return NotFound("No results found.");

            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }


    [HttpGet("total")]
    public async Task<IActionResult> GetTotalAssessments()
    {
        var total = await _service.GetTotalAssessmentsAsync();

        return Ok(new TotalAssessmentsDto
        {
            TotalAssessments = total
        });
    }

    [HttpGet("completed")]
    public async Task<IActionResult> GetCompletedAssessments()
    {
        var completed = await _service.GetCompletedAssessmentsAsync();

        return Ok(new CompletedAssessmentsDto
        {
            CompletedAssessments = completed
        });
    }
    [HttpDelete("InActive/{id}")]
    public async Task<IActionResult> InActive(long id)
    {
        var result = await _service.DeactivateAssessment(id);
        if (!result) return NotFound();
        return Ok(new { message = "Assessment InActive successfully" });
    }

    [HttpPost("restore/{id}")]
    public async Task<IActionResult> Restore(long id)
    {
        var result = await _service.RestoreAssessment(id);

        if (!result)
            return NotFound();

        return Ok(new { message = "Assessment restored successfully" });
    }

    [HttpGet("summaries/{studentId}")]
    public async Task<IActionResult> GetAssessmentSummariesForStudent(long studentId)
    {
        try
        {
            var summaries = await _service.GetAssessmentSummariesForStudent(studentId);
            return Ok(summaries);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred while fetching assessment summaries", error = ex.Message, stackTrace = ex.StackTrace });
        }
    }


    [HttpGet("student-assessments-status")]
    public async Task<IActionResult> Get()
    {
        var data = await _service.GetAllAssessments();
        return Ok(data);
    }
}