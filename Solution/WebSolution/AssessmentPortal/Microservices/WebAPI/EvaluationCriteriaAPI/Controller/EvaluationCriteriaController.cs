using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using EvaluationCriteriaEntities; //-----------------------dll
using EvaluationCriteriaInterfaces;//-----------------------dll
using EvaluationCriteriaServices;//------------------------dll

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/criteria")]
public class EvaluationCriteriaController : ControllerBase
{ 
        public EvaluationCriteriaController()
        {
            // Initialize with some sample data
            
        } 
        IEvaluationCriteriaService _svc = new EvaluationCriteriaService();
      
       
       // Insert candidate answers of the test .
        [HttpPut("{evaluationCriteriaId}/questions/{questionId}")]
        public IActionResult UpdateCriteria(int evaluationCriteriaId, int questionId)
        {
            bool status = _svc.UpdateCriteria(evaluationCriteriaId,questionId);
            return Ok(status);
        }

        [HttpPost]
        public IActionResult InsertCriteria(EvaluationCriteria criteria)
        {
             bool status = false;
            status = _svc.InsertCriteria(criteria);
           return Ok(status);
        }

        
}