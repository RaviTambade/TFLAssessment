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

 
}
