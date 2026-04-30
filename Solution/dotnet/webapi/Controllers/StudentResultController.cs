using Microsoft.AspNetCore.Mvc;
using backend.DTOs;
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
        public async Task<ActionResult<List<StudentResultDto>>> GetStudentResults()
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
        
    
            [HttpGet("{questionId}/{studentId}/{assessmentId}")]
            public async Task<IActionResult> GetStudentAnswerResult(
                int questionId,
                int studentId,
                int assessmentId)
            {
                var result = await _service.GetStudentAnswerResultAsync(questionId, studentId, assessmentId);

                if (result == null)
                    return NotFound("No data found");

                return Ok(result);
            }
}
    }
