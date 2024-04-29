using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using EvaluationCriteriaEntities; 
using EvaluationCriteriaInterfaces;
using EvaluationCriteriaServices;

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/criteria")]
public class EvaluationCriteriaController : ControllerBase
{ 
    IEvaluationCriteriaService _svc = new EvaluationCriteriaService();
    public EvaluationCriteriaController()
    {
        // Initialize with some sample data
        
    } 
    
    // Insert candidate answers of the test .
    [HttpPut("{evaluationCriteriaId}/questions/{questionId}")]
    public IActionResult UpdateCriteria(int evaluationCriteriaId, int questionId)
    {
        bool status = _svc.UpdateCriteria(evaluationCriteriaId,questionId);
        return Ok(status);
    }
    
    [HttpPut("{id}/subjects/{subjectId}")]
    public IActionResult UpdateSubject(int id, int subjectId)
    {
        bool status = _svc.UpdateSubject(id, subjectId);
        return Ok(status);
    }

    [HttpPost]
    public IActionResult InsertCriteria(EvaluationCriteria criteria)
    {  
        bool status = _svc.InsertCriteria(criteria);
        return Ok(status);
    }    
}