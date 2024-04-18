using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using AssessmentIntelligenceEntities; //-----------------------dll
using AssessmentIntelligenceInterfaces;//-----------------------dll
using AssessmentIntelligenceServices;//------------------------dll

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/[controller]")]
public class AssessmentIntelligenceController : ControllerBase
{ 
        public AssessmentIntelligenceController()
        {
            // Initialize with some sample data
            
        }
      IAssessmentIntelligenceService _svc=new AssessmentIntelligenceService ();

        // GET: api/assessment
        [HttpGet("Candidates/{candidateId}/Year/{year}")]
        
      
        public IActionResult GetCandidateResults(  int candidateId,int year)
        {
            List<AnnualCandidateResult> assessments =_svc.GetCandidateResults( candidateId, year);
            return Ok(assessments);
        }
}