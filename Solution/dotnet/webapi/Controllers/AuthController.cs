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
    public IActionResult SendPassword(PasswordRequest request)
    {
        var password = _passwordService.GeneratePassword(request.Email);
        _emailService.SendEmail(request.Email, password);

       return Ok(new { password = password });
    }

    [HttpPost("verify-password")]
    public IActionResult VerifyPassword(PasswordVerifyRequest request)
    {
        var result = _passwordService.VerifyPassword(request.Email, request.Password);

        if (!result)
            return BadRequest("Invalid or Expired Password");

        return Ok("password Verified Successfully");
    }
}