using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;
namespace backend.Controllers;
using backend.DTOs;

[ApiController]
[Route("api/[controller]")]
public class TestsController : ControllerBase
{
    private readonly ITestService _testService;

    public TestsController(ITestService testService)
    {
        _testService = testService;
    }

    /// <summary>
    /// Get all tests created by a specific SME (Subject Matter Expert)
    /// </summary>
    /// <param name="smeId">The ID of the SME</param>
    /// <returns>List of tests created by the SME</returns>
    [HttpGet("sme/{smeId}")]
    public async Task<IActionResult> GetAllTestsBySMEId(long smeId)
    {
        try
        {
            var tests = await _testService.GetAllTestsBySMEIdAsync(smeId);

            if (tests == null || tests.Count == 0)
            {
                return NotFound(new { message = "No tests found for the specified SME" });
            }

            return Ok(tests);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }

    /// <summary>
    /// Get all tests associated with a specific language
    /// </summary>
    /// <param name="languageId">The ID of the language</param>
    /// <returns>List of tests for the language</returns>
    [HttpGet("language/{languageId}")]
    public async Task<IActionResult> GetAllTestsByLanguage(int languageId)
    {
        try
        {
            var tests = await _testService.GetAllTestsByLanguageAsync(languageId);

            if (tests == null || tests.Count == 0)
            {
                return NotFound(new { message = "No tests found for the specified language" });
            }

            return Ok(tests);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }

    /// <summary>
    /// Get all tests associated with a specific assessment
    /// </summary>
    /// <param name="assessmentId">The ID of the assessment</param>
    /// <returns>List of tests for the assessment</returns>
    [HttpGet("assessment/{assessmentId}")]
    public async Task<IActionResult> GetAllTestByAssessmentId(long assessmentId)
    {
        try
        {
            var tests = await _testService.GetAllTestsByAssessmentIdAsync(assessmentId);

            if (tests == null || tests.Count == 0)
            {
                return NotFound(new { message = "No tests found for the specified assessment" });
            }

            return Ok(tests);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }

    [HttpGet("framework/{frameworkId}")]
    public async Task<IActionResult> GetAllTestsByFramework(int frameworkId)
    {
        try
        {
            var tests = await _testService.GetAllTestsByFrameworkAsync(frameworkId);

            if (tests == null || tests.Count == 0)
            {
                return NotFound(new { message = "No tests found for the specified framework" });
            }

            return Ok(tests);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }

    [HttpGet("runtime/{runtimeId}")]
    public async Task<IActionResult> GetAllTestsByRuntime(int runtimeId)
    {
        try
        {
            var tests = await _testService.GetAllTestsByRuntimeAsync(runtimeId);

            if (tests == null || tests.Count == 0)
            {
                return NotFound(new { message = "No tests found for the specified runtime" });
            }

            return Ok(tests);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }

    [HttpGet("details/{testId}")]
    public async Task<IActionResult> GetTestDetails(long testId)
    {
        try
        {
            var testDetails = await _testService.GetTestDetailsAsync(testId);

            if (testDetails == null)
            {
                return NotFound(new { message = "Test not found" });
            }

            return Ok(testDetails);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }
}
