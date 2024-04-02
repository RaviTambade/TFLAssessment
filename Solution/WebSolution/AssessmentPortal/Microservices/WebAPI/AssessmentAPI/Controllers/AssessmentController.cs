using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using AssessmentEntities; //-----------------------dll
using AssessmentInterfaces;//-----------------------dll
using AssessmentServices;//------------------------dll

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/[controller]")]
public class AssessmentController : ControllerBase
{ 
        public AssessmentController()
        {
            // Initialize with some sample data
            
        }
        IAssessmentService _svc=new AssessmentService();

        // GET: api/assessment
        [HttpGet("creationdate/{fromDate}/{toDate}")]
        public IActionResult GetAll(DateTime fromDate, DateTime toDate)
        {
            List<Assessment> assessments =_svc.GetAll( fromDate,  toDate);
            return Ok(assessments);
        }

        // GET: api/assessments/{id}
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Assessment theAssessment=_svc.GetDetails(id);
            return Ok(theAssessment);
        }

        [HttpGet("{smeId}")]
        public IActionResult GetAllBySubjectMatterExpert(int smeId)
        {
            List<Assessment> assessments=_svc.GetAllBySubjectMatterExpert(smeId);
            return Ok(assessments);
        }

        [HttpPost("{assessmentId}/{questionId}")]
        public IActionResult AddQuestion(int assessmentId,int questionId)
        {
            bool status=_svc.AddQuestion(assessmentId,questionId);
            return Ok(status);
        }

        [HttpPost("{assessmentId}/{questions}")]
        public IActionResult AddQuestions(int assessmentId,List<int> questions)
        {
            bool status=_svc.AddQuestions(assessmentId,questions);
            return Ok(status);
        }

        [HttpDelete("{assessmentId}/{questionId}")]
        public IActionResult RemoveQuestion(int assessmentId,int questionId)
        {
            bool status=_svc.RemoveQuestion(assessmentId,questionId);
            return Ok(status);
        }

        [HttpPut("{assessmentId}/{duration}")]
        public IActionResult ChangeDuration(int assessmentId,int duration)
        {
            bool status=_svc.ChangeDuration(assessmentId,duration);
            return Ok(status);
        }

        [HttpPut("{assessmentId}/{date}")]
        public IActionResult Reschedule(int assessmentId,DateTime date)
        {
            bool status=_svc.Reschedule(assessmentId,date);
            return Ok(status);
        }

     

        // POST: api/assessments
        [HttpPost]
        public IActionResult Post([FromBody] Assessment assessment)
        {
            if (assessment == null)
                return BadRequest();
            // Generate a unique ID for the new assessment
            return CreatedAtAction(nameof(Get), new { id = assessment.Id }, assessment);
        }

        // PUT: api/assessments/{id}
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Assessment assessment)
        {
        
            return NoContent();
        }

        // DELETE: api/assessments/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            /*var assessment =  null;

            if (assessment == null)
                return NotFound();
            */
            return NoContent();
        }

}
