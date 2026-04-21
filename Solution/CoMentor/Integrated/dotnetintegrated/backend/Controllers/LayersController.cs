



using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class LayersController : ControllerBase
{
    private readonly backend.Services.Interfaces.ILayersService _service;

    public LayersController(backend.Services.Interfaces.ILayersService service)
    {
        _service = service;
    }




    [HttpGet("{languageId}")]
    //http://localhost:5201/api/layers/1
    public async Task<IActionResult> GetLayers(long languageId)
        => Ok(await _service.GetLayers(languageId));

    
}