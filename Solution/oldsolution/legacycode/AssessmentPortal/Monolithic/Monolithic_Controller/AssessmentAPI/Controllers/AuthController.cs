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


    [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            try
            {
                if (user == null)
                    return BadRequest(new { message = "Invalid request body." });

                if (string.IsNullOrWhiteSpace(user.AadharId) ||
                    string.IsNullOrWhiteSpace(user.Firstname) ||
                    string.IsNullOrWhiteSpace(user.Lastname) ||
                    string.IsNullOrWhiteSpace(user.Email) ||
                    string.IsNullOrWhiteSpace(user.ContactNumber) ||
                    string.IsNullOrWhiteSpace(user.Password))
                {
                    return BadRequest(new { message = "All fields are required." });
                }

                 bool isAdded = await _service.AddUser(user);  // ✅ capture return

        if (isAdded)
        {
            Console.WriteLine("✅ User registered successfully!");
            return Ok(new { message = "User registered successfully!" });
        }
        else
        {
            Console.WriteLine("❌ User registration failed.");
            return StatusCode(500, new { message = "Failed to register user." });
        }
            }
            catch (Exception ex)
            {
                Console.WriteLine($" ERROR in Register: {ex.Message}");
                Console.WriteLine(ex.StackTrace);

                // Return detailed message so frontend can see it
                return StatusCode(500, new { message = $"Server error: {ex.Message}" });
            }
        }
        [HttpPost("change-password")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequest request)
        {
        var result = await  _service.ChangePassword(request);

         if (!result)
        return BadRequest("Old password is incorrect or update failed.");

          return Ok("Password updated successfully.");
}



}
