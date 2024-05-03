using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TFLAssessment;
namespace Assessment.Controllers;



[ApiController]
[Route("api/[controller]")]
public class AssessmentsController : ControllerBase
{
        private readonly List<Assessment> _assessments;

        public AssessmentsController()
        {
            // Initialize with some sample data
            _assessments = new List<Assessment>
            {
                new Assessment { Id = 1, Title = "Dotnet core essentials", Description = "Description of Assessment 1", Date = DateTime.Now },
                new Assessment { Id = 2, Title = "Java Design Patterns", Description = "Description of Assessment 2", Date = DateTime.Now }
            };
        }

        // GET: api/assessment
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_assessments);
        }

        // GET: api/assessments/{id}
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var assessment = _assessments.Find(a => a.Id == id);
            if (assessment == null)
                return NotFound();

            return Ok(assessment);
        }

        // POST: api/assessments
        [HttpPost]
        public IActionResult Post([FromBody] Assessment assessment)
        {
            if (assessment == null)
                return BadRequest();

            // Generate a unique ID for the new assessment
            assessment.Id = _assessments.Count + 1;
            _assessments.Add(assessment);

            return CreatedAtAction(nameof(Get), new { id = assessment.Id }, assessment);
        }

        // PUT: api/assessments/{id}
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Assessment assessment)
        {
            var existingAssessment = _assessments.Find(a => a.Id == id);
            if (existingAssessment == null)
                return NotFound();

            existingAssessment.Title = assessment.Title;
            existingAssessment.Description = assessment.Description;
            existingAssessment.Date = assessment.Date;

            return NoContent();
        }

        // DELETE: api/assessments/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var assessment = _assessments.Find(a => a.Id == id);
            if (assessment == null)
                return NotFound();

            _assessments.Remove(assessment);

            return NoContent();
        }

    // Other API endpoints...
}
