using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;

namespace backend.Controllers;


[ApiController]
[Route("api/[controller]")]
public class QuestionTypeController : ControllerBase
{
    private readonly IQuestionTypeService _service;

    public QuestionTypeController(IQuestionTypeService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetQuestionTypes()
    {
        var result = await _service.GetQuestionTypesAsync();
        return Ok(result);
    }
}