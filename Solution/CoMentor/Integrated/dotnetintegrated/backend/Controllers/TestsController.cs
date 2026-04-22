



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
    //http://localhost:5201/api/CreateTest/questions?conceptIds=1&conceptIds=2&type=MCQ
    public async Task<IActionResult> GetQuestions(
        [FromQuery] List<long> conceptIds,
        [FromQuery] string type)
        => Ok(await _service.GetQuestionsByConceptId(conceptIds, type));

    [HttpPost("create")]
    //http://localhost:5201/api/CreateTest/create
    public async Task<IActionResult> Create([FromBody] CreateTestRequestDto dto)
    {
        var id = await _service.CreateTest(dto);
        return Ok(new { TestId = id });
    }
}