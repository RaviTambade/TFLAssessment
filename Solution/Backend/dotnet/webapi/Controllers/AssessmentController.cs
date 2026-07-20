using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;
namespace backend.Controllers;

using backend.DTO.Responses;
using backend.DTO.Requests;

[ApiController]
[Route("api/[controller]")]
public class AssessmentController : ControllerBase
{
    private readonly IAssessmentsService _service;

    public AssessmentController(IAssessmentsService service)
    {
        _service = service;
    }

    [HttpGet("user/{userId}")]
    public async Task<IActionResult> GetAll(long userId,DateTime fromDate,DateTime toDate)
    {
        try
        {
            var data =
                await _service.GetAllUpcomingAssessmentsService(userId,fromDate,toDate
                );

            return Ok(data);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = "Error fetching assessments",
                error = ex.Message
            });
        }
    }
    [HttpGet("all")]
    public async Task<IActionResult> GetAll(bool? isActive = null)
    {
        try
        {
            var data = await _service.GetAllAssessments();
            return Ok(data);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message, stackTrace = ex.StackTrace });
        }
    }

     [HttpGet("performance/{userId}")]
public async Task<IActionResult> GetAssessmentPerformance(long userId)
{
    var result = await _service.GetAssessmentPerformance(userId);
    return Ok(result);
}

    [HttpGet("tests")]
    public async Task<IActionResult> GetTestsAsync()
    {
        var tests = await _service.GetTestsAsync();
        return Ok(tests);
    }

    [HttpGet("students")]
    public async Task<IActionResult> GetStudentsAsync()
    {
        var students = await _service.GetStudentsAsync();
        return Ok(students);
    }

    [HttpPost("assigned")]
    public async Task<IActionResult> AssignAssessmentAsync([FromBody] AssignAssessments dto)
    {
        try
        {
            await _service.AssignAssessmentAsync(dto);
            return Ok("Assessment Assigned Successfully");
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("{assessmentId}/questions")]
    public async Task<IActionResult> GetAssessmentQuestionsAsync(int assessmentId)
    {
        var assessmentQuestions = await _service.GetAssessmentQuestionsAsync(assessmentId);
        return Ok(assessmentQuestions);
    }

  [HttpPost("submit")]
public async Task<IActionResult> SaveAssessmentAnswersAsync(
    [FromBody] AssessmentAnswers submission)
{
    try
    {
        if (submission == null)
        {
            return BadRequest(new
            {
                success = false,
                message = "Invalid data"
            });
        }

        var result =
            await _service.SaveAssessmentAnswersAsync(submission);

        if (result)
        {
            return Ok(new
            {
                success = true,
                message = "Assessment submitted successfully"
            });
        }

        return StatusCode(500, new
        {
            success = false,
            message = "Failed to save assessment"
        });
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.ToString());

        return StatusCode(500, new
        {
            success = false,
            message = ex.Message
        });
    }
}

    [HttpGet("{studentId}/{assessmentId}")]
    public async Task<IActionResult> GetResultData(int studentId, int assessmentId)
    {
        try
        {

            var request = new AssessmentstudentsResults
            {
                StudentId = studentId,
                AssessmentId = assessmentId
            };

            var result = await _service.GetResultData(request);

            if (result == null)
                return NotFound("No results found.");

            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }


    [HttpGet("total")]
    public async Task<IActionResult> GetTotalAssessments()
    {
        var total = await _service.GetTotalAssessmentsAsync();

        return Ok(new TotalAssessments
        {
            TotalAssessment = total
        });
    }

    [HttpGet("completed")]
    public async Task<IActionResult> GetCompletedAssessments()
    {
        var completed = await _service.GetCompletedAssessmentsAsync();

        return Ok(new CompletedAssessments
        {
            CompletedAssessment = completed
        });
    }
    [HttpDelete("InActive/{id}")]
    public async Task<IActionResult> InActive(long id)
    {
        var result = await _service.DeactivateAssessment(id);
        if (!result) return NotFound();
        return Ok(new { message = "Assessment InActive successfully" });
    }

    [HttpPost("cancel/test/{testId}")]
    public async Task<IActionResult> CancelByTest(long testId)
    {
        var cancelledCount = await _service.CancelAssessmentsByTestId(testId);

        if (cancelledCount == 0)
            return NotFound(new { message = "Test not found." });

        return Ok(new { message = "Test cancelled successfully.", cancelledCount });
    }

    [HttpPost("restore/{id}")]
    public async Task<IActionResult> Restore(long id)
    {
        var result = await _service.RestoreAssessment(id);

        if (!result)
            return NotFound();

        return Ok(new { message = "Assessment restored successfully" });
    }

    [HttpGet("summaries/{studentId}")]
    public async Task<IActionResult> GetAssessmentSummariesForStudent(long studentId)
    {
        try
        {
            var summaries = await _service.GetAssessmentSummariesForStudent(studentId);
            return Ok(summaries);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred while fetching assessment summaries", error = ex.Message, stackTrace = ex.StackTrace });
        }
    }


    [HttpGet("student-assessments-status")]
    public async Task<IActionResult> Get()
    {
        var data = await _service.GetAllAssessments();
        return Ok(data);
    }

    [HttpGet("completed-assessments/{studentId}")]
    public async Task<IActionResult> GetCompletedAssessments(int studentId)
    {
        var data = await _service.GetCompletedAssessments(studentId);

        return Ok(data);
    }
}
