
using Microsoft.AspNetCore.Mvc;
using Backend.Dtos;
using Backend.Services.Interface;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestHistoryController : ControllerBase
{
    private readonly ITestHistoryServices _testHistoryServices;

    public TestHistoryController(ITestHistoryServices testHistoryServices)
    {
        _testHistoryServices = testHistoryServices;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllTestHistory()
    {
        try
        {
            var testHistories = await _testHistoryServices.GetAllTestHistoryAsync();
            return Ok(testHistories);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Error retrieving test history", error = ex.Message });
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTestDetails(int id)
    {
        try
        {
            var testDetails = await _testHistoryServices.GetTestDetailsByIdAsync(id);
            
            if (testDetails == null)
            {
                return NotFound(new { message = $"Test with ID {id} not found" });
            }

            return Ok(testDetails);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Error retrieving test details", error = ex.Message });
        }
    }
}