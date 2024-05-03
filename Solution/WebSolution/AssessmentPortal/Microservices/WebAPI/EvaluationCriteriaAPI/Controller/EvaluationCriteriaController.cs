using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Entities;
using Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Services.Interfaces;

[ApiController]
[Route("api/criteria")]
public class EvaluationCriteriaController : ControllerBase
{ 
    private readonly IEvaluationCriteriaService _svc;
    
    public EvaluationCriteriaController(IEvaluationCriteriaService service)
    {
        _svc = service;
    } 
    
    // Insert candidate answers of the test.
    [HttpPut("{evaluationCriteriaId}/questions/{questionId}")]
    public async Task<IActionResult> UpdateCriteria(int evaluationCriteriaId, int questionId)
    {
        bool status = await _svc.UpdateCriteria(evaluationCriteriaId, questionId);
        return Ok(status);
    }
    
    [HttpPut("{id}/subjects/{subjectId}")]
    public async Task<IActionResult> UpdateSubject(int id, int subjectId)
    {
        bool status = await _svc.UpdateSubject(id, subjectId);
        return Ok(status);
    }

    [HttpPost]
    public async Task<IActionResult> InsertCriteria(EvaluationCriteria criteria)
    {  
        bool status = await _svc.InsertCriteria(criteria);
        return Ok(status);
    }    
}
