using Microsoft.AspNetCore.Mvc;
using Assessment_result.Services;
using Assessment_result.DTOs;   // IMPORTANT

namespace Assessment_result.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AssessmentResultController : ControllerBase
{
    private readonly IAssessmentResultService _service;

    public AssessmentResultController(IAssessmentResultService service)
    {
        _service = service;
    }

    [HttpGet("{studentId}/{assessmentId}")]
    public async Task<IActionResult> GetResultData(int studentId, int assessmentId)
    {
        try
        {
            // ✅ Create request DTO
            var request = new AssessmentResultDto
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
}