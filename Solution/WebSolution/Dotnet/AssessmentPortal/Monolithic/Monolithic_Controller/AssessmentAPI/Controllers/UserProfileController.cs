using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;

namespace Transflower.TFLAssessment.Controllers;


[ApiController]
[Route("api/[controller]")]
public class UserProfileController : ControllerBase
{
    private readonly IUserProfileService _svc;

    public UserProfileController(IUserProfileService service)
    {
        _svc = service;

    }


    //http://localhost:5238/api/UserProfile/1
    [HttpGet("{id}")]
    public async Task<IActionResult> GetUserProfileById(int id)
    {
        User UserProfile = await _svc.GetUserProfileById(id);
        if (UserProfile == null)
        {
            return NotFound("No user found.");
        }
        return Ok(UserProfile);
    }

    //http://localhost:5238/api/UserProfile/1
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUserProfile([FromBody] User user, int id)
    {
        bool status = await _svc.UpdateUserProfile(user, id);
        if (status == false)
        {
            return NotFound("No user found.");
        }
        return Ok(status);
    }


    [HttpGet("contactno/{contactnumber}")]
    public async Task<IActionResult> GetUserRoleByContactNo(string contactnumber)
    {
        UserRoleAssign userData= await _svc.GetUserRoleByContactNo(contactnumber);

        if (userData == null)
        {
            return NotFound("No user found.");
        }
        return Ok(userData);
    }
}
