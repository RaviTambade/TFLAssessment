using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[Route("api/analytics/assessment-statistics")]
[ApiController]
public class AssessmentStatisticsController : ControllerBase
{
    private readonly IAssessmentStatisticsService _service;

    public AssessmentStatisticsController(IAssessmentStatisticsService service)
    {
        _service = service;
    }

    //GET: api/AssessmentStatistics
    [HttpGet]
    public async Task<IActionResult> GetAssessmentStatistics()
    {
        var result = await _service.GetAssessmentStatistics();
        return Ok(result);
    }
}