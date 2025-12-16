using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;

[ApiController]
[Route("api/Concepts")]
public class ConceptController : ControllerBase
{   

    private readonly ILogger <ConceptController> _logger;
    private readonly IConceptService _svc;
    
    public ConceptController(IConceptService service, ILogger<ConceptController> logger)
    {
        _svc = service;
        _logger= logger;
    } 
   
   
    [HttpPut("{conceptId}/questions/{questionId}")]
    public async Task<IActionResult> UpdateConcept(int conceptId, int questionId)
    {
        bool status = await _svc.UpdateConcept(conceptId, questionId);
        if (!status){
            _logger.LogError($"Failed to update Concept for conceptId: {{ConceptId}} and questionId: {{QuestionId}}", conceptId, questionId);
            return BadRequest("Failed to update Concept.");    
        }
         _logger.LogInformation("Log Generated to Insert candidate answers of the test");
        return Ok(status);
    }
    
    [HttpPut("{id}/subjects/{subjectId}")]
    public async Task<IActionResult> UpdateSubject(int id, int subjectId)
    {
        bool status = await _svc.UpdateSubject(id, subjectId);
        _logger.LogInformation("Log Generated For update subject");
        return Ok(status);
    }

    [HttpPost]
    public async Task<IActionResult> InsertConcept(Concepts concept)
    {  
        bool status = await _svc.InsertConcept(concept);
         _logger.LogInformation("Log Generated For Insert concept ");
        return Ok(status);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetConceptBySubjectId(int id)
    {
        List<Concepts> concepts = await _svc.GetConceptBySubjectId(id);
        return Ok(concepts);
    }

    [HttpGet("questioncount/{id}")]
    public async Task<IActionResult> getConceptQuestionCount(int id)
    {
        List<ConceptQuestionCount> count = await _svc.getConceptQuestionCount(id);
        return Ok(count);
    }
}
