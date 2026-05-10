




using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class ConceptsController : ControllerBase
{
    private readonly backend.Services.Interfaces.IConceptsService _service;

    public ConceptsController(backend.Services.Interfaces.IConceptsService service)
    {
        _service = service;
    }


    [HttpGet("concepts")]
    [HttpGet("~/api/technologies/concepts")]
    //http://localhost:5201/api/Concepts/concepts?frameworkIds=1&frameworkIds=2
    public async Task<IActionResult> GetConcepts([FromQuery] List<long> frameworkIds)
        => Ok(await _service.GetConceptsAsync(frameworkIds));

   
}
