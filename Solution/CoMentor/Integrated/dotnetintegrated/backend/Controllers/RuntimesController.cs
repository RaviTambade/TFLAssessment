



using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class RuntimesController : ControllerBase
{
    private readonly backend.Services.Interfaces.IRuntimesService _service;

    public RuntimesController(backend.Services.Interfaces.IRuntimesService service)
    {
        _service = service;
    }

    [HttpGet("runtimes")]
   // http://localhost:5201/api/runtimes/runtimes
    public async Task<IActionResult> GetRuntimes()
        => Ok(await _service.GetRuntimes());

   
}