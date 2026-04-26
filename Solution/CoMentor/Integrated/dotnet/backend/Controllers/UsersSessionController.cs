using backend.DTOs;
using backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]


public class UserSessionsController : ControllerBase
{
    private readonly IUserSessionsService _userSessionsService;

    public UserSessionsController(IUserSessionsService userSessionsService)
    {
        _userSessionsService = userSessionsService;
    }

    [HttpGet("all")]
    
    public async Task<IActionResult> GetUserSessions()
    {
        try
        {
            var sessions = await _userSessionsService.GetUserSessionsAsync();
            if (sessions == null)
            {
                return NotFound(new { message = "No user sessions found" });
            }

            return Ok(sessions);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }

    [HttpGet("total-sessions")]
public async Task<IActionResult> GetTotalUserSessions()
{
    var total = await _userSessionsService.GetTotalUserSessionsAsync();

    return Ok(new
    {
        totalSessions = total
    });
}
}