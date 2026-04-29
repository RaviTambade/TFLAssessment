using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;
namespace backend.Controllers;
using backend.DTOs;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;

    public UsersController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet("personal/{userId}")]
    public async Task<IActionResult> GetPersonalDetails(int userId)
    {
        var details = await _userService.GetPersonalDetailsAsync(userId);
        if (details == null)
        {
            return NotFound(new { message = "Personal details not found" });
        }

        return Ok(details);
    }

    [HttpGet("professional/{userId}")]
    public async Task<IActionResult> GetProfessionalDetails(int userId)
    {
        var details = await _userService.GetProfessionalDetailsAsync(userId);
        if (details == null)
        {
            return NotFound(new { message = "Professional details not found" });
        }

        return Ok(details);
    }

    [HttpGet("academic/{userId}")]
    public async Task<IActionResult> GetAcademicDetails(int userId)
    {
        var details = await _userService.GetAcademicDetailsAsync(userId);
        if (details == null)
        {
            return NotFound(new { message = "Academic details not found" });
        }

        return Ok(details);
    }

    [HttpGet("fullname/{userId}")]
    public async Task<IActionResult> GetFullName(int userId)
    {
        var fullName = await _userService.GetFullNameAsync(userId);
        if (fullName == null)
        {
            return NotFound(new { message = "Full name not found" });
        }

        return Ok(fullName);
    }

    [HttpGet("role/{userId}")]
    public async Task<IActionResult> GetRoleByUserId(int userId)
    {
        var roles = await _userService.GetRolesByUserIdAsync(userId);
        if (roles == null || roles.Count == 0)
        {
            return NotFound(new { message = "No roles found for this user" });
        }

        return Ok(roles);
    }
}