using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using Transflower.TFLAssessment.Entities;

using Transflower.TFLAssessment.Services.Interfaces;

namespace Transflower.TFLAssessment.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserRegistrationController : ControllerBase
{
            private readonly IUserRegistrationService _service;

        public UserRegistrationController(IUserRegistrationService service)
        {
            _service=service;
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

                // await _service.AddUser(user);
                // Console.WriteLine($" User register sucessfullyss");

                // return Ok(new { message = "User registered successfully!" });

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



}