using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;
namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AssessmentController : ControllerBase
{
    private readonly IAssessmentsService _service;

    public AssessmentController( IAssessmentsService service)
    {
        _service = service;
    }

    [HttpGet("{userId}")]
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

}