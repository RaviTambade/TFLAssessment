



using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class CreateTestController : ControllerBase
{
    private readonly backend.Services.Interfaces.ICreateTestService _service;

    public CreateTestController(backend.Services.Interfaces.ICreateTestService service)
    {
        _service = service;
    }




   [HttpGet("questions")]
public async Task<IActionResult> GetQuestionsByConceptIdAsync(
    [FromQuery] List<long> conceptIds,
    [FromQuery] string type,
    [FromQuery] string difficulty)
{
    return Ok(await _service.GetQuestionsByConceptIdAsync(conceptIds, type, difficulty));
}

    [HttpPost("create")]
    //http://localhost:5201/api/CreateTest/create
    public async Task<IActionResult> CreateTest([FromBody] CreateTestRequestDto dto)
    {
        var id = await _service.CreateTestAsync(dto);
        return Ok(new { TestId = id });
    }
}