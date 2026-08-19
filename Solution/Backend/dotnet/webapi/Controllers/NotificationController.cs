using Hangfire;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NotificationController : ControllerBase
{
     [HttpPost("send")]
        public IActionResult SendEmail(string email, string passphrase)
        {
            BackgroundJob.Enqueue<IEmailService>(
                service => service.SendEmail(email, passphrase)
            );

            return Ok("Email job created.");
        }
}