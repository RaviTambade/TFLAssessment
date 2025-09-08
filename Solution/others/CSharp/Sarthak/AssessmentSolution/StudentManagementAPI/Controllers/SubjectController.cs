using Microsoft.AspNetCore.Mvc;
using AssessmentLib.Services.Interface;
using AssessmentLib.Entities;
namespace StudentManagementAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubjectController : ControllerBase
    {
        private readonly ISubjectService _svc;
        public SubjectController(ISubjectService service)
        {
            _svc = service;
        }

        [HttpGet("Subjects")]
        public async Task <IActionResult>GetAllSubjects()
        {
            List<SubjectModel>subjects = await _svc.GetAllSubject();
            if (subjects ==null || subjects.Count == 0)
            {
                return NotFound("not subjects found. ");  
            }
            return Ok(subjects);
        }

        [HttpGet("add")]
        public async Task<IActionResult> AddSubject([FromBody] SubjectModel subject)
        {
            if (subject == null || string.IsNullOrEmpty(subject.Title))
            {
                return BadRequest("Invalid subject data ");
            }
            Boolean result =await _svc.AddSubject(subject);
            if (result)
                {
                return Ok("Subject addded sucessfully");
                }
            return StatusCode(500, "An error occurred while adding the subject."); 
            
        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteSubject(int id )
        {
            if (id <= 0)
            {
                return BadRequest("invalid subject id ");
            }
            Boolean result =await _svc.DeleteSubject(id);
            if (result )
            {
                return Ok("subject deleted sucessfully");
            }
            if (result == false)
            {
                return BadRequest("Invalid subjectid please enter valid id");
            }
            return StatusCode(500, "AN error occured while deleting the subject");
        }
    }
}
