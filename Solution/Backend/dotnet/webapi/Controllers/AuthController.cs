using backend.Models;
using backend.Services;
using backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace backend.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IPasswordService _passwordService;
    private readonly IEmailService _emailService;

    public AuthController(IPasswordService passwordService, IEmailService emailService)
    {
        _passwordService = passwordService;
        _emailService = emailService;
    }

    [HttpPost("send-password")]
    public IActionResult SendPassword(string email)
    {
        var password = _passwordService.GeneratePassword("");
        _emailService.SendEmail(" ", " ");

       return Ok(new { password = password });
    }

    [HttpPost("verify-password")]
    public IActionResult VerifyPassword(string email, string password)
    {
        var result = _passwordService.VerifyPassword(email, password);

        if (!result)
            return BadRequest("Invalid or Expired Password");

        return Ok("password Verified Successfully");
    }
}