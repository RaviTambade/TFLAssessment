using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        private readonly IQuestionsService _service;

        public QuestionsController(IQuestionsService service)
        {
            _service = service;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> QuestionDetailsWithAns(int id)
        {
            var result = await _service.QuestionDetailsWithAns(id);

            if (result == null)
                return NotFound("No data found");

            return Ok(result);
        }

        [HttpGet("{assessmentId}/student/{studentId}")]
        public async Task<IActionResult> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId)
        {
            var result = await _service.GetStudentAssessmentQuestionsResultAsync(assessmentId, studentId);
            return Ok(result);
        }

        [HttpGet("/{questionId}/answer")]
        public async Task<IActionResult> GetQuestionDetailsWithAnswer(int questionId)
        {
            var result = await _service.GetQuestionDetailsWithAnswer(questionId);

            if (result == null)
            {
                return NotFound("Question not found");
            }

            return Ok(result);
        }

        [HttpGet("/{questionId}")]
        public async Task<IActionResult> GetQuestionDetails(int questionId)
        {
            var result = await _service.GetQuestionDetails(questionId);

            if (result == null)
            {
                return NotFound("Question not found");
            }

            return Ok(result);
        }

    }
}