using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using QuestionBankEntity; //-----------------------dll
using QuestionBankInterfaces;//-----------------------dll
using QuestionBankServices;//------------------------dll

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/[controller]")]
public class QuestionBankController : ControllerBase
{ 
        public QuestionBankController()
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
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {   
            IQuestionBankService _svc = new QuestionBankService();
            Question question = _svc.GetQuestion(id);
            return Ok(question);
        }

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
