using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        private readonly IQuestionsService _service;
        private readonly AppDbContext _context;

        public QuestionsController(IQuestionsService service, AppDbContext context)
        {
            _service = service;
            _context = context;
        }

        // [HttpGet("~/api/questions/concepts/{conceptId}/questions")]
        // public async Task<string> GetQuestionsByConcept(long conceptId)
        // {
        //      return await Task.FromResult(new List<string>());
        // }

       
        [HttpGet("{assessmentId}/student/{studentId}")]
        public async Task<IActionResult> GetStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId)
        {
            var result = await _service.GetStudentAssessmentQuestionsResultAsync(assessmentId, studentId);
            return Ok(result);
        }

        [HttpGet("{questionId}/answer")]
        public async Task<IActionResult> GetQuestionDetailsWithAnswer(int questionId)
        {
            var result = await _service.GetQuestionDetailsWithAnswer(questionId);

            if (result == null)
            {
                return NotFound("Question not found");
            }

            return Ok(result);
        }

        [HttpGet("{questionId}")]
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
