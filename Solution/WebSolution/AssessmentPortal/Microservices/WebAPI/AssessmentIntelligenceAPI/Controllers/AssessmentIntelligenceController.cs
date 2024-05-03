using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Entities;
using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Services.Interfaces;
namespace Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Controllers;


//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/[controller]")]
public class AssessmentIntelligenceController : ControllerBase
{ 
    private readonly IAssessmentIntelligenceService _svc;
    public AssessmentIntelligenceController(IAssessmentIntelligenceService service)
    {
        _svc=service;  
    }

    // GET: api/assessment
    [HttpGet("Candidates/{candidateId}/Year/{year}")]
    public async Task<IActionResult> GetCandidateResults(  int candidateId,int year)
    {
        List<AnnualCandidateResult> assessments =await _svc.GetCandidateResults( candidateId, year);
        return Ok(assessments);
    }
}