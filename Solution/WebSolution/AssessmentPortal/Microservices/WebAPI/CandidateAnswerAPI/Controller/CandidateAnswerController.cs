using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using CandidateAnswerEntities; //-----------------------dll
using CandidateAnswerInterfaces;//-----------------------dll
using CandidateAnswerServices;//------------------------dll

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/candidateanswer")]
public class CandidateAnswerController : ControllerBase
{ 
        public CandidateAnswerController()
        {
            // Initialize with some sample data
            
        } 
         ICandidateAnswerService _svc = new CandidateAnswerService();
      
       
       // Insert candidate answers of the test .
        [HttpPost("assessmentanswers/candidates/{candidateId}")]
        public IActionResult InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers)
        {
            bool status = _svc.InsertCandidateAnswers(candidateId,answers);
            return Ok(status);
        }
}