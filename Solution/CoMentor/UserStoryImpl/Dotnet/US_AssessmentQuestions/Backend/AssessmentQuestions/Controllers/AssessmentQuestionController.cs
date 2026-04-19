using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class AssessmentQuestionsController : ControllerBase
{
    private readonly IAssessmentQuestionService _service;

    public AssessmentQuestionsController(IAssessmentQuestionService service)
    {
        _service = service;
    }

<<<<<<< HEAD
    [HttpGet("{assessmentId}")]
    public async Task<IActionResult> GetAssessmentQuestions(int assessmentId)
    {
        var data = await _service.GetAssessmentQuestions(assessmentId);
        return Ok(data);
    }

    [HttpPost("submit")]
    public IActionResult SubmitAssessmentAnswers([FromBody] Dictionary<string, string> answers)
    {
        if (answers == null || answers.Count == 0)
        {
            return BadRequest(new { success = false, message = "No answers were submitted." });
        }

        return Ok(new
        {
            success = true,
            submittedAnswers = answers,
            totalAnswers = answers.Count,
            message = "Answers received successfully."
        });
    }
=======


[HttpGet("{assessmentId}")]
public async Task<IActionResult> GetAssessmentQuestions(int assessmentId)
{
    var data = await _service.GetAssessmentQuestions(assessmentId);
    return Ok(data);
>>>>>>> 13a6324ac5945008b8992fac64f918e1d73aafe0
}
