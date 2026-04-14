using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AssessmentUpcomingController : ControllerBase
{
    private readonly IAssessmentsUpcomingService _service;

    public AssessmentUpcomingController( IAssessmentsUpcomingService service)
    {
        _service = service;
    }

    [HttpGet("{userId}")]
    public async Task<IActionResult> GetAll(long userId)
    {
        var data = await _service.GetAllUpcomingAssessmentsService(userId); // Replace 0 with actual user ID if available
        return Ok(data);
    }
}