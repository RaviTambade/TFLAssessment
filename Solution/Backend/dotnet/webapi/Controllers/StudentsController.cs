using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentsService _service;

        public StudentsController(IStudentsService service)
        {
            _service = service;
        }

        [HttpGet("total")]
        public async Task<IActionResult> GetTotalStudents()
        {
            var result = await _service.GetTotalStudents();
            return Ok(result);
        }
    }
}