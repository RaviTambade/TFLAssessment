using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using Transflower.TFLAssessment.Entities;

using Transflower.TFLAssessment.Services.Interfaces;

namespace Transflower.TFLAssessment.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _service;
    private readonly ILogger<AuthController> _logger;

    public AuthController(IAuthService service, ILogger<AuthController> logger)
    {
        _service = service;
        _logger = logger;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var response = await _service.GetUserWithRolesByEmail(request.Email, request.Password);
        if (response == null)
        {
            _logger.LogWarning("Login failed for {Email}", request.Email);
            return Unauthorized("Invalid credentials");
        }

        _logger.LogInformation("User {Email} logged in", request.Email);
        return Ok(response);
    }
}
