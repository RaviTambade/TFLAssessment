using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CandidateAnswerEntities;
using CandidateAnswerInterfaces;
using CandidateAnswerServices;

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/candidateanswer")]
public class CandidateAnswerController : ControllerBase
{ 
    ICandidateAnswerService _svc = new CandidateAnswerService();
    public CandidateAnswerController()
    {
        // Initialize with some sample data  
    } 
        
    // Insert candidate answers of the test .
    [HttpPost("assessmentanswers/candidates/{candidateId}")]
    public IActionResult InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers)
    {
        bool status = _svc.InsertCandidateAnswers(candidateId,answers);
        return Ok(status);
    }
}