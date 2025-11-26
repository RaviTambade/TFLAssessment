using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;

namespace Transflower.TFLAssessment.Controllers;


[ApiController]
[Route("api/[controller]")]
public class UserAnalyticsController : ControllerBase
{
    private readonly IUserAnalyticsService _svc;

    public UserAnalyticsController(IUserAnalyticsService service)
    {
        _svc = service;

    }


    //http://localhost:5238/api/UserAnalytics/ActiveUserSeconds/1
    [HttpGet("ActiveUserSeconds/{id}")]
    public async Task<IActionResult> GetTotalOnlineSecondsAsync(int id)
    {
        double activeSecond = await _svc.GetTotalOnlineSecondsAsync(id);
        if (activeSecond<=0)
        {
            return NotFound("No second found.");
        }
        return Ok(activeSecond);
    }

    [HttpGet("ActiveUsercount")]
    public async Task<IActionResult> GetActiveUsersCountAsync()
    {
        int activeusercount = await _svc.GetActiveUsersCountAsync();
        if (activeusercount <= 0)
        {
            return NotFound("No second found.");
        }
        return Ok(activeusercount);
    }

    [HttpGet("allusercount")]
    public async Task<IActionResult> GetUserCount()
    {
        int dailyactiveusercount = await _svc.GetUserCount();
        if (dailyactiveusercount <= 0)
        {
            return NotFound("No user found.");
        }
        return Ok(dailyactiveusercount);
    }


    [HttpGet("toptenuser")]
    public async Task<IActionResult> GetTopTenUser()
    {
        List<User> topten = await _svc.GetTopTenUser();
        if (topten == null)
        {
            return NotFound("No daily active user found.");
        }
        return Ok(topten);
    }

    [HttpGet("activeUser")]
    public async Task<IActionResult> GetActiveUsers()
    {
        List<User> activeusers = await _svc.GetActiveUsers();
        if (activeusers == null)
        {
            return NotFound("No daily active user found.");
        }
        return Ok(activeusers);
    }
    [HttpGet("alluser")]
    public async Task<IActionResult> GetAllUsers()
    {
        List<User> allusers = await _svc.GetAllUsers();
        if (allusers == null)
        {
            return NotFound("No daily active user found.");
        }
        return Ok(allusers);
    }

   
    [HttpGet("AverageActiveUserSeconds")]
    public async Task<IActionResult> GetAverageSessionDurationAsync()
    {
        String avgSecondOfMonth = await _svc.GetAverageSessionDurationAsync();
        if (avgSecondOfMonth == null)
        {
            return NotFound("No daily active user found.");
        }
        return Ok(avgSecondOfMonth);
    }
}
