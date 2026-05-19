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

    [HttpPost]
    [HttpPost("expertise")]
    public async Task<IActionResult> AddSmeExpertise([FromBody] AddExpertiseRequest request)
    {
        try
        {
            long userId = request.UserId > 0
                ? request.UserId
                : request.UserRolesId;

            if (userId <= 0)
            {
                return BadRequest(new
                {
                    message = "UserId is required."
                });
            }

            Expertise expertise = new Expertise
            {
                User_Id = userId,
                Runtime = request.Runtime,
                Framework = request.Framework,
                Layer = request.Layer,
                Language = request.Language
            };

            int rows =
                await _expertiseService
                    .AddSmeExpertise(
                        expertise
                    );

            return Ok(new
            {
                message =
                    "Expertise Added Successfully",

                insertedRows = rows,

                data = expertise
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
}
