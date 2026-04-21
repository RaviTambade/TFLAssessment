



// using Microsoft.AspNetCore.Mvc;

// [Route("api/[controller]")]
// [ApiController]
// public class CreateTestController : ControllerBase
// {
//     private readonly backend.Services.Interfaces.ICreateTestService _service;

//     public CreateTestController(backend.Services.Interfaces.ICreateTestService service)
//     {
//         _service = service;
//     }




//     [HttpGet("layers/{languageId}")]
//     //http://localhost:5181/api/CreateTest/layers/1
//     public async Task<IActionResult> GetLayers(long languageId)
//         => Ok(await _service.GetLayers(languageId));

//     [HttpGet("concepts")]
//     //http://localhost:5181/api/CreateTest/concepts?frameworkIds=1&frameworkIds=2
//     public async Task<IActionResult> GetConcepts([FromQuery] List<long> frameworkIds)
//         => Ok(await _service.GetConcepts(frameworkIds));

//     [HttpGet("questions")]
//     //http://localhost:5181/api/CreateTest/questions?conceptIds=1&conceptIds=2&type=MCQ
//     public async Task<IActionResult> GetQuestions(
//         [FromQuery] List<long> conceptIds,
//         [FromQuery] string type)
//         => Ok(await _service.GetQuestions(conceptIds, type));

//     [HttpPost("create")]
//     //http://localhost:5181/api/CreateTest/create
//     public async Task<IActionResult> Create([FromBody] CreateTestRequestDto dto)
//     {
//         var id = await _service.CreateTest(dto);
//         return Ok(new { TestId = id });
//     }
// }