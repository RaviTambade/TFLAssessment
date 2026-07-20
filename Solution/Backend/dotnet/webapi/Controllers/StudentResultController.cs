using Microsoft.AspNetCore.Mvc;
using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Services.Interfaces;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentResultController : ControllerBase
    {
        private readonly IStudentResultService _service;

        public StudentResultController(IStudentResultService service)
        {
            _service = service;
        }

        // ✅ GET: api/StudentResult
        [HttpGet]
        public async Task<ActionResult<List<StudentResults>>> GetStudentResults()
        {
            try
            {
                var results = await _service.GetStudentResultsAsync();

                if (results == null || results.Count == 0)
                {
                    return NotFound("No student results found.");
                }

                return Ok(results);
            }
            catch (Exception ex)
            {
                // Optional: log error
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

            [HttpGet("{studentId}/{assessmentId}/{questionId}")]
            public async Task<IActionResult> GetStudentAnswerResult(
                int assessmentId,
                int studentId,
                int questionId
                )
            {
                var result = await _service.GetStudentAnswerResultAsync(questionId, studentId, assessmentId);
                if (result == null)
                    return NotFound("No data found");
                return Ok(result);
            }

[HttpPost("save")]
public async Task<IActionResult> SaveStudentAssessmentResult(
    [FromBody] StudentAssessmentResultRequest result)
{
    try
    {
        bool saved = await _service.SaveStudentAssessmentResult(result);

        if (saved)
        {
            return Ok(new
            {
                message = "Student assessment result saved successfully"
            });
        }
        return BadRequest(new
        {
            message = "Failed to save student assessment result"
        });
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Internal server error: {ex.Message}");
    }
}        
}}
