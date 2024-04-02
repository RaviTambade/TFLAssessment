using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using ResultEntity; //-----------------------dll
using ResultInterfaces;//-----------------------dll
using ResultServices;//------------------------dll

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/[controller]")]
public class ResultController : ControllerBase
{ 
        public ResultController()
        {
            // Initialize with some sample data
            
        }
        
        // GET: api/assessment
        [HttpGet]
        public IActionResult Get()
        {
           

            return Ok( );
        }

      // GET: api/questionbank/{id}
        // [HttpGet("{candidateid}/{testid}")]
        // public IActionResult Get(int candidateId, int testId)
        // {   
        //     IResultService _svc = new ResultService();
        //     int result = _svc.GetCandidateScore(candidateId,testId);
        //     Console.WriteLine(result);
        //     return Ok(result);
        // }

        // [HttpGet("{candidateid}/{testid}")]
        // public IActionResult Get(int candidateId, int testId)
        // {   
        //     IResultService _svc = new ResultService();
        //     int result = _svc.GetCandidateTestScore(candidateId,testId);
        //     Console.WriteLine(result);
        //     return Ok(result);
        // }

        [HttpGet("{candidateid}/{testid}")]
        public IActionResult Get(int candidateId, int testId)
        {   
            IResultService _svc = new ResultService();
            CandidateResultDetails result = _svc.CandidateTestResultDetails(candidateId,testId);
            Console.WriteLine(result);
            return Ok(result);
        }

        // public IActionResult Get(int id)
        // {   
        //     IQuestionBankService _svc = new QuestionBankService();
        //     Question question = _svc.GetQuestion(id);
        //     return Ok(question);
        // }

        // POST: api/assessments
        // [HttpPost]
        // public IActionResult Post([FromBody] Assessment assessment)
        // {
        //     if (assessment == null)
        //         return BadRequest();
        //     // Generate a unique ID for the new assessment
        //     return CreatedAtAction(nameof(Get), new { id = assessment.Id }, assessment);
        // }

        // PUT: api/assessments/{id}
        // [HttpPut("{id}")]
        // public IActionResult Put(int id, [FromBody] Assessment assessment)
        // {
        
        //     return NoContent();
        // }

        // DELETE: api/assessments/{id}
        // [HttpDelete("{id}")]
        // public IActionResult Delete(int id)
        // {
        //     /*var assessment =  null;

        //     if (assessment == null)
        //         return NotFound();
        //     */
        //     return NoContent();
        // }

}
