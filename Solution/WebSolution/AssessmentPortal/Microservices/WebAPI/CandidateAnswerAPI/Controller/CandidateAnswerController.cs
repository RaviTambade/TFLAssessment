using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.Assessment.WebAPI.CandidateAnswerAPI.Entities;
using Transflower.Assessment.WebAPI.CandidateAnswerAPI.Services.Interfaces;


//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/candidateanswer")]
public class CandidateAnswerController : ControllerBase
{ 
    private readonly ICandidateAnswerService _service;
    public CandidateAnswerController(ICandidateAnswerService service)
    {
        _service = service;
    }
        
    // Insert candidate answers of the test .
    [HttpPost("assessmentanswers/candidates/{candidateId}")]
    public async Task<IActionResult> InsertCandidateAnswers(int candidateId, [FromBody] List<CandidateAnswer> answers)
    {
        bool status =await _service.InsertCandidateAnswers(candidateId,answers);
        return Ok(status);
    }
}