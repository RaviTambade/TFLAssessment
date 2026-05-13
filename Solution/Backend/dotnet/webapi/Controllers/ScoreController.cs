using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using backend.Services.Interfaces;
using backend.DTOs;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScoreController : ControllerBase
    {
        private readonly IScoreService _scoreService;

        public ScoreController(IScoreService scoreService)
        {
            _scoreService = scoreService;
        }

        [HttpGet("GetAverageScoreById/{studentId}")]
        public async Task<ActionResult<AverageScoreDto>> GetAverageScoreById(int studentId)
        {
            var result = await _scoreService.GetAverageScoreByIdAsync(studentId);

            if (result == null || result.StudentId == 0)
                return NotFound("No data found");

            return Ok(result);
        }

          [HttpGet("GetAllStudentsAverageScore")]
        public async Task<ActionResult<List<AverageScoreDto>>> GetAllStudentsAverageScore()
        {
            var result = await _scoreService.GetAllStudentsAverageScoreAsync();

            if (result == null || result.Count == 0)
                return NotFound("No data found");

            return Ok(result);
        }

        [HttpGet("GetAssessmentResultData/{studentId}/{assessmentId}")]
        public async Task<ActionResult<AssessmentScoreDto>> GetAssessmentResultData(int studentId, int assessmentId)
        {
            var result = await _scoreService.GetAssessmentResultData(studentId, assessmentId);

            if (result == null)
                return NotFound("No data found");

            return Ok(result);
        }
    }
}