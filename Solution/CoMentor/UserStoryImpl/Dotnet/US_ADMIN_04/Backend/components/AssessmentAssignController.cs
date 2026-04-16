using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AssessmentAssignController : ControllerBase
{
    private readonly IAssessmentAssignService _service;

    public AssessmentAssignController(IAssessmentAssignService service)
    {
        _service = service;
    }

    [HttpGet("tests")]
    public async Task<IActionResult> GetTests()
    {
        var tests = await _service.GetTests();
        return Ok(tests);
    }

    [HttpGet("students")]
    public async Task<IActionResult> GetStudents()
    {
        var students = await _service.GetStudents();
        return Ok(students);
    }

    [HttpPost ("assigned")]
    public async Task<IActionResult> AssignAssessment(AssignAssessmentDto dto)
    {
        await _service.AssignAssessment(dto);
        return Ok("Assessment Assigned Successfully");
    }

   
}