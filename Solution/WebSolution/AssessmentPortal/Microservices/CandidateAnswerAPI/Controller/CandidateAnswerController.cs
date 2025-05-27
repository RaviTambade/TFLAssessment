using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;


//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/candidateanswer")]
public class CandidateAnswerController : ControllerBase
{ 
    private readonly ILogger <CandidateAnswerController> _logger;
    private readonly ICandidateAnswerService _service;
    public CandidateAnswerController(ICandidateAnswerService service, ILogger<CandidateAnswerController> logger)
    {
        _service = service;
        _logger= logger;
    }
        
    // Insert candidate answers of the test .
    [HttpPost("assessmentanswers/candidates/{candidateId}")]
    public async Task<IActionResult> InsertCandidateAnswers(int candidateId, [FromBody] List<CandidateAnswer> answers)
    {
        bool status =await _service.InsertCandidateAnswers(candidateId,answers);
        if(!status) {
            _logger.LogError("Failed to insert candidate answers for candidate ID: {CandidateId}", candidateId);
            return BadRequest("Failed to insert candidate answers.");
        }
        _logger.LogInformation("Candidate answers inserted successfully for candidate ID: {CandidateId}", candidateId);
        return Ok(new {message ="Candidate answers inserted successfully.",status = status});
    }
}