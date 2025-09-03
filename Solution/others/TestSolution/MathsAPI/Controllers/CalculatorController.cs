using Microsoft.AspNetCore.Mvc;

namespace MathsAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CalculatorController : ControllerBase
{
    [HttpGet("add")]
    public ActionResult<int> Add(int a, int b)
    {
        return Ok(a + b);
    }

    [HttpGet("subtract")]
    public ActionResult<int> Subtract(int a, int b)
    {
        return Ok(a - b);
    }
}