using Microsoft.AspNetCore.Mvc;
using upcommingassessments.Models;
using upcommingassessments.Services;

namespace upcommingassessments.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AssessmentController : ControllerBase
{
    private readonly AssessmentService _assessmentService;
    private readonly ILogger<AssessmentController> _logger;

    public AssessmentController(AssessmentService assessmentService, ILogger<AssessmentController> logger)
    {
        _assessmentService = assessmentService;
        _logger = logger;
    }

    /// <summary>
    /// Gets upcoming assessments for a student
    /// </summary>
    /// <param name="studentId">The ID of the student</param>
    /// <returns>List of upcoming assessments</returns>
    /// <response code="200">Returns the list of upcoming assessments</response>
    /// <response code="400">If studentId is invalid</response>
    /// <response code="404">If no upcoming assessments found</response>
    [HttpGet("student/{studentId}/upcoming")]
    [ProducesResponseType(typeof(List<StudentAssessment>), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> GetUpcomingAssessments(int studentId)
    {
        try
        {
            _logger.LogInformation("Getting upcoming assessments for student {StudentId}", studentId);

            var assessments = await _assessmentService.GetUpcomingAssessmentsAsync(studentId);

            if (!assessments.Any())
            {
                _logger.LogInformation("No upcoming assessments found for student {StudentId}", studentId);
                return NotFound(new { message = "No upcoming assessments found for this student." });
            }

            _logger.LogInformation("Found {Count} upcoming assessments for student {StudentId}", assessments.Count, studentId);
            return Ok(assessments);
        }
        catch (ArgumentException ex)
        {
            _logger.LogWarning("Invalid request for student {StudentId}: {Message}", studentId, ex.Message);
            return BadRequest(new { message = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting upcoming assessments for student {StudentId}", studentId);
            return StatusCode(500, new { message = "An error occurred while retrieving assessments." });
        }
    }

    /// <summary>
    /// Gets details of a specific assessment for a student
    /// </summary>
    /// <param name="studentId">The ID of the student</param>
    /// <param name="assessmentId">The ID of the assessment assignment</param>
    /// <returns>Assessment details</returns>
    /// <response code="200">Returns the assessment details</response>
    /// <response code="400">If parameters are invalid</response>
    /// <response code="404">If assessment not found</response>
    [HttpGet("student/{studentId}/assessment/{assessmentId}")]
    [ProducesResponseType(typeof(StudentAssessment), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> GetAssessmentDetails(int studentId, int assessmentId)
    {
        try
        {
            _logger.LogInformation("Getting assessment details for student {StudentId}, assessment {AssessmentId}", studentId, assessmentId);

            var assessment = await _assessmentService.GetAssessmentDetailsAsync(studentId, assessmentId);

            if (assessment == null)
            {
                _logger.LogInformation("Assessment {AssessmentId} not found for student {StudentId}", assessmentId, studentId);
                return NotFound(new { message = "Assessment not found for this student." });
            }

            return Ok(assessment);
        }
        catch (ArgumentException ex)
        {
            _logger.LogWarning("Invalid request: {Message}", ex.Message);
            return BadRequest(new { message = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting assessment details for student {StudentId}, assessment {AssessmentId}", studentId, assessmentId);
            return StatusCode(500, new { message = "An error occurred while retrieving assessment details." });
        }
    }
}