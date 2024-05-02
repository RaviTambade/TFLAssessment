using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using AssessmentIntelligenceEntities; 
using AssessmentIntelligenceInterfaces;
using AssessmentIntelligenceServices;

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/[controller]")]
public class AssessmentIntelligenceController : ControllerBase
{ 
    IAssessmentIntelligenceService _svc=new AssessmentIntelligenceService ();
    public AssessmentIntelligenceController()
    {
        // Initialize with some sample data    
    }

    // GET: api/assessment
    [HttpGet("Candidates/{candidateId}/Year/{year}")]
    public IActionResult GetCandidateResults(  int candidateId,int year)
    {
        List<AnnualCandidateResult> assessments =_svc.GetCandidateResults( candidateId, year);
        return Ok(assessments);
    }
}