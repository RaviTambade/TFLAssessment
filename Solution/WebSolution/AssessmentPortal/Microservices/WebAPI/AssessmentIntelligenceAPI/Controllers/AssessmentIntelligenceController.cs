using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using Transflower.AssessmentIntelligenceAPI.Entities;

using Transflower.AssessmentIntelligenceAPI.Services.Interfaces;

namespace Transflower.AssessmentIntelligenceAPI.Controllers;


//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/[controller]")]
public class AssessmentIntelligenceController : ControllerBase
{ 
    private readonly ILogger <AssessmentIntelligenceController> _logger;
    
    
    
    private readonly IAssessmentIntelligenceService _service;
    public AssessmentIntelligenceController(IAssessmentIntelligenceService service, ILogger <AssessmentIntelligenceController> logger)
    {
        _service = service;
        _logger = logger;  
    }

    // GET: api/assessment
    //http://localhost:5294/api/AssessmentIntelligence/candidates/1/year/2015
    [HttpGet("Candidates/{candidateId}/Year/{year}")]
    public async Task<IActionResult> GetCandidateResults(  int candidateId,int year)
    {
        List<AnnualCandidateResult> assessments =await _service.GetCandidateResults( candidateId, year);
        _logger.LogInformation("Log Succefully created");
        return Ok(assessments);
    }
}