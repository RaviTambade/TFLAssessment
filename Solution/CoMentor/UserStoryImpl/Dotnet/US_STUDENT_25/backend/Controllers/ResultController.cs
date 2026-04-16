using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ResultController : ControllerBase
{
    private readonly IResultService _service;

    public ResultController(IResultService service)
    {
        _service = service;
    }

    [HttpGet("results")]
    public async Task<IActionResult> GetResults()
    {
        var data = await _service.GetAssessmentResults();
        return Ok(data);
    }
}