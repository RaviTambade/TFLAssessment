
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
// using Transflower.Entities;
// using Transflower.SubjectAPI.Services.Interfaces;
using APIforSubject.Entities;
using APIforSubject.Services.Interfaces;

// namespace Transflower.Subject.Controllers;
namespace APIforSubject.Subject.Controllers;
//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/[controller]")]
public class SubjectController : ControllerBase
{ 
   private readonly ISubjectService _svc;

    public SubjectController(ISubjectService service)
    {
        // Initialize with some sample data
       _svc = service;  
       
    }
    
    // GET: get all subjects
    //http://localhost:5264/api/subject/subjects
   // [EnableCors("AllowOrigin")]
    //[EnableCors(origins: "http://localhost:5173", headers: "*", methods: "*")]
    [HttpGet("subjects")]
    public async Task<IActionResult>  GetAllSubjects()
    {
        List<SubjectModel> subjects =await _svc.GetAllSubject();
        if(subjects == null || subjects.Count == 0)
        {
            return NotFound("No subjects found.");
        }
        return Ok(subjects);
    }

    // POST: add a new subject
// http://localhost:5264/api/subject/add
[HttpPost("add")]
public async Task<IActionResult> AddSubject([FromBody] SubjectModel subject)
{
    if (subject == null || string.IsNullOrEmpty(subject.Title))
    {
        return BadRequest("Invalid subject data.");
    }
    int result = await _svc.AddSubject(subject);
    if (result > 0)
    {
        return Ok("Subject added successfully.");
    }
    return StatusCode(500, "An error occurred while adding the subject.");
}

// DELETE: delete a subject by ID
// http://localhost:5264/api/subject/delete/{id}
[HttpDelete("delete/{id}")]
public async Task<IActionResult> DeleteSubject(int id)
{
    if (id <= 0)
    {
        return BadRequest("Invalid subject ID.");
    }

    int result = await _svc.DeleteSubject(id);
    if (result > 0)
    {
        return Ok("Subject deleted successfully.");
    }
    if(result == 0)
    {
        return BadRequest("Invalid subject Id please enter valid id");
    }
    return StatusCode(500, "An error occurred while deleting the subject.");
}

  
    //http://localhost:5151/api/assessment/1
   /* [HttpGet("{id}")]
    public async Task<IActionResult>  GetDetails(int id)
    {
        Subject theAssessmenttheSubject=await _svc.GetDetails(id);
        
        return Ok(theAssessment);
    }*/


/*    
    //http://localhost:5151/api/Assessment/addquestion/assessments/1/questions/10
    [HttpPost("addquestion/assessments/{assessmentId}/questions/{questionId}")]
    public async Task<IActionResult>  AddQuestion(int assessmentId,int questionId)
    {
        bool status=await _svc.AddQuestion(assessmentId,questionId);
        _logger.LogInformation("Add question method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    
    //http://localhost:5151/api/Assessment/1/questions/9
    [HttpDelete("{assessmentId}/questions/{questionId}")]
    public async Task<IActionResult>  RemoveQuestion(int assessmentId,int questionId)
    {
        bool status=await _svc.RemoveQuestion(assessmentId,questionId);
        _logger.LogInformation("Remove question method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }

    //http://localhost:5151/api/Assessment/1/duration/40
    [HttpPut("{assessmentId}/duration/{duration}")]
    public async Task<IActionResult>  ChangeDuration(int assessmentId,string duration)
    {
        bool status=await _svc.ChangeDuration(assessmentId,duration);
        _logger.LogInformation("Change duration method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(status);
    }*/

}
