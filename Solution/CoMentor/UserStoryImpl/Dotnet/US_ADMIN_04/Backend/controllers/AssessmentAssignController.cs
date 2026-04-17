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
        var data = await _service.GetStudentsAsync();
        return Ok(data);
    }

    [HttpPost ("assigned")]
    public async Task<IActionResult> AssignAssessmentAsync(AssignAssessmentDto dto)
    {
        await _service.AssignAssessmentAsync(dto);
        return Ok("Assessment Assigned Successfully");
    }

   
}