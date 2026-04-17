using Microsoft.AspNetCore.Mvc;
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

    [HttpGet("{assessmentId}")]
public async Task<IActionResult> GetAssessmentQuestions(int assessmentId)
{
    var data = await _service.GetAssessmentQuestions(assessmentId);
    return Ok(data);
}
}