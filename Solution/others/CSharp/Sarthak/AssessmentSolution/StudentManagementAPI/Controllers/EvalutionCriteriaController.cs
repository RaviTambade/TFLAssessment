using AssessmentLib.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;
using AssessmentLib.Services.Interface;
using System.Runtime.InteropServices;
using Mysqlx.Crud;
using AssessmentLib.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StudentManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EvalutionCriteriaController : ControllerBase
    {
        private readonly ILogger<EvalutionCriteriaController> _logger;
        private readonly IEvalutionCriteriaService _svc;
        public EvalutionCriteriaController(ILogger<EvalutionCriteriaController> logger, IEvalutionCriteriaService svc)
        {
            _logger = logger;
            _svc = svc;
        }

        // GET: api/<EvalutionCriteriaController>
        [HttpGet]
        public async Task <IActionResult> UpdateCriteria(int EvalutionCriteriaId,int QuestionId)
        {
            bool status=await _svc.UpdateCriteria(EvalutionCriteriaId, QuestionId);
            {
                if (!status)
                {
                    _logger.LogError("Failed to update criteria for evalutioncriteriaid {EvalutionCriteriaId} and questionID {QuestionId}", EvalutionCriteriaId, QuestionId);
                    return BadRequest("Failed to update criteria");
                }
                _logger.LogInformation("Log Generated to Insert candidate answer of the test");
                return Ok(status);
            }
        }

        // GET api/<EvalutionCriteriaController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> UpdateSubject(int Id,int SubjectId)
        {
          bool status = await _svc.UpdateSubject(Id, SubjectId);
            _logger.LogInformation("Log Generated for update subject");
            return Ok(status);
          
        }
        // POST api/<EvalutionCriteriaController>
        [HttpPost]
        public async Task<IActionResult> InsertCriteria(EvalutionCriteria criteria)
        {
        bool status= await _svc.InsertCriteria(criteria);
            _logger.LogInformation("Log Generated For Insert Criteria");
            return Ok(status);
        }
    }
}
