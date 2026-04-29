
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;

namespace Transflower.TFLAssessment.Controllers;


[ApiController]
[Route("api/[controller]")]
public class MembershipController : ControllerBase
{
    private readonly IMembershipService _svc;

    public MembershipController(IMembershipService service)
    {
        _svc = service;

    }



    //http://localhost:5238/api/Membership/updaterole/5
    [HttpPost("updaterole/{id}")]
    public async Task<IActionResult> UpdateRole(int id, [FromBody] List<Role> roles)
    {
        bool status = await _svc.UpdateRole(id, roles);
        if (status == false)
        {
            return NotFound("No user role updated");
        }
        return Ok(status);
    }

    [HttpPost("assignsubject/{id}/addsubject/{subjectid}")]
    public async Task<IActionResult> UpdateSmeSubject(int id, int subjectid)
    {
        bool status = await _svc.UpdateSmeSubject(id, subjectid);
        if (status == false)
        {
            return NotFound("Not assign subject updated");
        }
        return Ok(status);
    }



    [HttpPost("assignsubject/{id}/removesubject/{subjectid}")]
    public async Task<IActionResult> RemoveAssignSubject(int id, int subjectid)
    {
        bool status = await _svc.RemoveAssignSubject(id, subjectid);
        if (status == false)
        {
            return NotFound("Not assign subject updated");
        }
        return Ok(status);
    }
}
