using Microsoft.AspNetCore.Mvc;
using US_Admin_01.Services.Interfaces;

namespace US_Admin_01.Controller;


[ApiController]
[Route("api/admin/dashboard")]
public class DashboardController : ControllerBase
{
    private readonly IDashboardService _service;

    public DashboardController(IDashboardService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetDashboard()
    {
        var result = await _service.GetDashboardData();
        return Ok(result);
    }
}


