using Microsoft.AspNetCore.Mvc;
using AssessmentAnswer.Services.Interfaces;
using AssessmentAnswer.DTOs;


namespace AssessmentAnswer.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AssessmentAnswerController : ControllerBase
{
   private readonly IAssessmentService _service;

        public AssessmentAnswerController(IAssessmentService service)
        {
            _service = service;
        }

        // POST: api/AssessmentAnswer/submit
        [HttpPost("submit")]
        public async Task<IActionResult>SaveAssessmentAnswersAsync([FromBody] AssessmentAnswersDto submission)
        {
            try
            {
                if (submission == null)
                {
                    return BadRequest("Invalid data");
                }

                var result = await _service.SaveAssessmentAnswersAsync(submission);

                if (result)
                {
                    return Ok(new { message = "Assessment submitted successfully" });
                }

                return StatusCode(500, "Failed to save assessment");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
}
