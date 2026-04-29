



using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class LanguagesController : ControllerBase
{
    private readonly backend.Services.Interfaces.ILanguagesService _service;

    public LanguagesController(backend.Services.Interfaces.ILanguagesService service)
    {
        _service = service;
    }

    

    [HttpGet("{runtimeId}")]
    //http://localhost:5201/api/languages/1
    public async Task<IActionResult> GetLanguages(long runtimeId)
        => Ok(await _service.GetLanguagesAsync(runtimeId));

    
}