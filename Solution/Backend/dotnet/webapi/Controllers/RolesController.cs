using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using backend.Services.Interfaces;
using backend.DTO.Requests;
using backend.DTO.Responses;

namespace backend.controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class RolesController : ControllerBase
    {

        private readonly IRolesService _roleService;

        public RolesController(IRolesService rolesService)
        {
            _roleService = rolesService;
        }

        [HttpGet("active/_roles/count")]
        public async Task<IActionResult> GetActiveRolesCount()
        {
            var result = await _roleService.GetActiveRolesCount();
            return Ok(result);
        }


        [HttpGet("active-roles")]
        public async Task<IActionResult> GetActiveRoles()
        {
            var result = await _roleService.GetActiveRoles();
            return Ok(result);
        }

        [HttpGet("active-roles/{roleId}/users")]
        public async Task<IActionResult> GetUsersByRole(long roleId)
        {
            var result = await _roleService.GetUsersByRole(roleId);
            return Ok(result);
        }

        [HttpGet("unassigned/users")]
        public async Task<IActionResult> GetUnAssignedUsers()
        {
            var result =await _roleService.GetUnAssignedUsers();
            return Ok(result);
        }
    }
}



