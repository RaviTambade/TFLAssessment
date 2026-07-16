using Microsoft.AspNetCore.Mvc;

using backend.DTO.Requests;
using backend.Models;
using backend.Services.Interfaces;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ExpertiseController : ControllerBase
{
    private readonly IExpertiseService
        _expertiseService;

    // Dependency Injection
    public ExpertiseController(IExpertiseService expertiseService)
    {
        _expertiseService = expertiseService;
    }

    [HttpPost("expertise")]
    public async Task<IActionResult> AddSmeExpertise([FromBody] Expertise expertize)
    {
        try
        {
            int rows = await _expertiseService.AddSmeExpertise(expertize);

            return Ok(new
            {
                message =
                    "Expertise Added Successfully",

                insertedRows = rows,

                data = expertize
            });
        }
        catch (Exception ex)
        {
            return BadRequest(new
            {
                message = ex.Message
            });
        }
    }
    
[HttpGet("options")]
public async Task<IActionResult> GetOptions()
{
    var result = await _expertiseService.GetExpertiseOptions();

    return Ok(result);
}
}
