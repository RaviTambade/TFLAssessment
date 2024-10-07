
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.Entities;
using  Transflower.SubjectAPI.Services.Interfaces;
namespace Transflower.Subject.Controllers;

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
       
        return Ok(subjects);
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
