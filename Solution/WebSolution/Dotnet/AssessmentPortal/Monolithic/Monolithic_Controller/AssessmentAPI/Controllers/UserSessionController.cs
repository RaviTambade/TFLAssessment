using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
namespace Transflower.TFLAssessment.Controllers;
[ApiController]
[Route("api/[controller]")]
public class UserSessionController : ControllerBase
{
    private readonly IUserSessionService _service;

    public UserSessionController(IUserSessionService service)
    {
        _service = service;
    }
 [HttpPost("login/{userId}")]
    public async Task<IActionResult> Login(long userId)
    {
        bool success = await _service.LoginAsync(userId);

        if (!success)
            return BadRequest("Failed to login user.");

        return Ok("User logged in successfully.");
    }

    [HttpPost("logout/{userId}")]
    public async Task<IActionResult> Logout(long userId)
    {
        bool success = await _service.LogoutAsync(userId);

        if (!success)
            return NotFound("User is already logged out or no active session found.");

        return Ok("User logged out successfully.");
    }
 // http://localhost:5238/api/UserSession/history/1
    [HttpGet("history/{userId}")]
    public async Task<IActionResult> GetUserHistory(int userId)
    {
    var history = await _service.GetUserHistory(userId);
    return Ok(history);
    }

    
}
