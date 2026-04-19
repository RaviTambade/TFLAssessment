using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;
namespace backend.Controllers;
using backend.DTOs;

[ApiController]
[Route("api/[controller]")]
public class AssessmentController : ControllerBase
{
    private readonly IAssessmentsService _service;

    public AssessmentController( IAssessmentsService service)
    {
        _service = service;
    }

    [HttpGet("user/{userId}")]
    public async Task<IActionResult> GetAll(long userId)
    {
        var data = await _service.GetAllUpcomingAssessmentsService(userId); // Replace 0 with actual user ID if available
        return Ok(data);
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAll()
    {
        var data = await _service.GetAssessments();
        return Ok(data);
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

    [HttpPost ("assigned")]
    public async Task<IActionResult> AssignAssessmentAsync(AssignAssessmentDto dto)
    {
        await _service.AssignAssessmentAsync(dto);
        return Ok("Assessment Assigned Successfully");
    }
     [HttpGet("questions/{assessmentId}")]
    public async Task<IActionResult> GetAssessmentQuestions(int assessmentId)
    {
        var data = await _service.GetAssessmentQuestions(assessmentId);
        return Ok(data);
    }
    [HttpPost("submit")]
        public async Task<IActionResult>SaveAssessmentAnswersAsync([FromBody] AssessmentAnswersDto submission)
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

    [HttpGet("results")]
    public async Task<IActionResult> GetResults()
    {
        var data = await _service.GetAssessmentResults();
        return Ok(data);
    }


}