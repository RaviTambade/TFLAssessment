using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class StudentAssessmentController : ControllerBase
{
    private readonly IStudentAssessmentService _service;

    public StudentAssessmentController(IStudentAssessmentService service)
    {
        _service = service;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var data = _service.GetAllAssessments();
        return Ok(data);
    }
}