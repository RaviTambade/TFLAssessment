using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;

namespace Transflower.TFLAssessment.Controllers;


[ApiController]
[Route("api/[controller]")]
public class RoleController : ControllerBase
{
    private readonly IRoleService _svc;

    public RoleController(IRoleService service)
    {
        _svc = service;

    }


    //http://localhost:5238/api/role/roles
    [HttpGet("{roles}")]
    public async Task<IActionResult> GetAllRoles()
    {
        List<Role> roles = await _svc.GetAllRoles();
        if (roles == null)
        {
            return NotFound("No roles found.");
        }
        return Ok(roles);
    }
    //http://localhost:5238/api/Role/1
    [HttpGet("users")]
    public async Task<IActionResult> GetUsersByRole([FromQuery] List<int> roleIds)
    {
    if (roleIds == null || roleIds.Count == 0)
    return BadRequest("Please provide at least one roleId.");

    var users = await _svc.GetUsersByRole(roleIds);
    
    if (users.Count == 0)
    return NotFound("No users found for selected roles.");

    return Ok(users);
}




    [HttpPost("roles")]
    
    public async Task<IActionResult> AddNewRole([FromBody]Role role)
    {
        bool status = await _svc.AddNewRole(role);
        if (status == false)
        {
            return NotFound("No roles added.");
        }
        return Ok(status);
    }


    [HttpDelete("roles/{id}")]
    public async Task<IActionResult> removeExistingRole(int id)
    {
        bool status = await _svc.removeExistingRole(id);
        if (status == false)
        {
            return NotFound("No roles removed.");
        }
        return Ok(status);
    }

}
