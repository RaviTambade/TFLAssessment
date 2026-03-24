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
        var data = await _service.GetTests();
        return Ok(data);
    }

    [HttpGet("students")]
    public async Task<IActionResult> GetStudents()
    {
        var data = await _service.GetStudents();
        return Ok(data);
    }

    [HttpPost ("assigned")]
    public async Task<IActionResult> CreateAssessment(CreateAssessmentDto dto)
    {
        await _service.CreateAssessment(dto);
        return Ok("Assessment Assigned Successfully");
    }

   
}