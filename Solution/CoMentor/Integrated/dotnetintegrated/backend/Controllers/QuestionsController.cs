using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;

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
        public IActionResult QuestionDetailsWithAns(int id)
        {
            var result = _service.QuestionDetailsWithAns(id);

            if (result == null)
                return NotFound("No data found");

            return Ok(result);
        }
    }
}