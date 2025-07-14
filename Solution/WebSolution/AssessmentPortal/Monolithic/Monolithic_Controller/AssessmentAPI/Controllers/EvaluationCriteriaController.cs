// using System.Diagnostics;
// using Microsoft.AspNetCore.Mvc;
// using Transflower.TFLAssessment.Entities;
// using Transflower.TFLAssessment.Services.Interfaces;

// [ApiController]
// [Route("api/criteria")]
// public class EvaluationCriteriaController : ControllerBase
// { 

//     private readonly ILogger <EvaluationCriteriaController> _logger;
//     private readonly IEvaluationCriteriaService _svc;
    
//     public EvaluationCriteriaController(IEvaluationCriteriaService service, ILogger<EvaluationCriteriaController> logger)
//     {
//         _svc = service;
//         _logger= logger;
//     } 
    
//     // Insert candidate answers of the test.
//     [HttpPut("{evaluationCriteriaId}/questions/{questionId}")]
//     public async Task<IActionResult> UpdateCriteria(int evaluationCriteriaId, int questionId)
//     {
//         bool status = await _svc.UpdateCriteria(evaluationCriteriaId, questionId);
//          _logger.LogInformation("Log Generated to Insert candidate answers of the test");
//         return Ok(status);
//     }
    
//     [HttpPut("{id}/subjects/{subjectId}")]
//     public async Task<IActionResult> UpdateSubject(int id, int subjectId)
//     {
//         bool status = await _svc.UpdateSubject(id, subjectId);
//         _logger.LogInformation("Log Generated For update subject");
//         return Ok(status);
//     }

//     [HttpPost]
//     public async Task<IActionResult> InsertCriteria(EvaluationCriteria criteria)
//     {  
//         bool status = await _svc.InsertCriteria(criteria);
//          _logger.LogInformation("Log Generated For Insert Criteria ");
//         return Ok(status);
//     }    
// }
