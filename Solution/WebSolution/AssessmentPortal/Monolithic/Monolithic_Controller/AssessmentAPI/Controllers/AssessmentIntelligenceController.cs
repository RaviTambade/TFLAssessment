using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using Transflower.TFLAssessment.Entities;

using Transflower.TFLAssessment.Services.Interfaces;

namespace Transflower.TFLAssessment.Controllers;


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
        if (assessments == null || assessments.Count == 0)
        {
            _logger.LogWarning("No assessments found for candidate {CandidateId} in year {Year}", candidateId, year);
            return NotFound($"No assessments found for candidate {candidateId} in year {year}");
        }
        _logger.LogInformation("Log successfully created. Number of assessments: {Count}", assessments.Count);
        return Ok(assessments);
    }
}