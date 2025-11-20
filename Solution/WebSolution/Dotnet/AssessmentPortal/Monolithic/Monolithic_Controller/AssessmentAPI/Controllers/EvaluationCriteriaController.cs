using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;

[ApiController]
[Route("api/criteria")]
public class EvaluationCriteriaController : ControllerBase
{   

    private readonly ILogger <EvaluationCriteriaController> _logger;
    private readonly IEvaluationCriteriaService _svc;
    
    public EvaluationCriteriaController(IEvaluationCriteriaService service, ILogger<EvaluationCriteriaController> logger)
    {
        _svc = service;
        _logger= logger;
    } 
   
   
    [HttpPut("{evaluationCriteriaId}/questions/{questionId}")]
    public async Task<IActionResult> UpdateCriteria(int evaluationCriteriaId, int questionId)
    {
        bool status = await _svc.UpdateCriteria(evaluationCriteriaId, questionId);
        if (!status){
            _logger.LogError("Failed to update criteria for evaluationCriteriaId: {EvaluationCriteriaId} and questionId: {QuestionId}", evaluationCriteriaId, questionId);
            return BadRequest("Failed to update criteria.");    
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
    public async Task<IActionResult> InsertCriteria(EvaluationCriteria criteria)
    {  
        bool status = await _svc.InsertCriteria(criteria);
         _logger.LogInformation("Log Generated For Insert Criteria ");
        return Ok(status);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCriteriaBySubjectId(int id)
    {
        List<EvaluationCriteria> evaluationCriteria = await _svc.GetCriteriaBySubjectId(id);
        return Ok(evaluationCriteria);
    }

    [HttpGet("questioncount/{id}")]
    public async Task<IActionResult> getCriteriaQuestionCount(int id)
    {
        List<CriteriaQuestionCount> evaluationCriteriaCount = await _svc.getCriteriaQuestionCount(id);
        return Ok(evaluationCriteriaCount);
    }
}
