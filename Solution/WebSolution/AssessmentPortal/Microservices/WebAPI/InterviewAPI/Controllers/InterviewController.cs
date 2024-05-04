using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using  Transflower.TFLAssessment.Services.Interfaces;
namespace Transflower.TFLAssessment.Controllers;

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/interviews")]
public class InterviewController : ControllerBase
{ 

    private readonly IInterviewService _svc;
    public InterviewController(IInterviewService service)
    {
        _svc = service;
    }
    
    [HttpGet("details")]
    public async Task<IActionResult> GetAllInterviewCandidates()
    {
        List<InterviewCandidateDetails> details =await _svc.GetAllInterviewCandidates();
        return Ok(details);
    }

    [HttpGet("candidate/{candidateId}")]
    public async Task<IActionResult> GetInterviewedCandidatesSubjects(int candidateId)
    {
        List<InterviewCandidateDetails> details = await _svc.GetInterviewedCandidatesSubjects(candidateId);
        return Ok(details);
    }

    [HttpGet("{interviewId}")]
    public async Task<IActionResult> GetInterviewDetails(int interviewId)
    {
        InterviewDetails details =await _svc.GetInterviewDetails(interviewId);
        return Ok(details); 
    }

    //3 seperate functions for updating date, time 
    [HttpPut("{interviewId}/date/{date}")]
    public async Task<IActionResult> RescheduleInterview(int interviewId,DateTime date)
    {
        bool status=await _svc.RescheduleInterview(interviewId,date);
        return Ok(status);
    }

    [HttpPut("{interviewId}/time/{time}")]
    public async Task<IActionResult> RescheduleInterview(int interviewId,string time)
    {
        bool status=await _svc.RescheduleInterview(interviewId,time);
        return Ok(status);
    }

    [HttpPut("{interviewId}/time/{time}/date/{date}")]
    public async Task<IActionResult> RescheduleInterview(int interviewId,string time,DateTime date)
    {
        bool status=await _svc.RescheduleInterview(interviewId,time,date);
        return Ok(status);
    }

    [HttpPut("{interviewId}/subjectexperts/{smeId}")]
    public async Task<IActionResult> ChangeInterviewer(int interviewId, int smeId)
    {
        bool status=await _svc.ChangeInterviewer(interviewId,smeId);
        return Ok(status);
    }

    [HttpDelete("{interviewId}")]
    public  async Task<IActionResult> CancelInterview(int interviewId)
    {
        bool status=await _svc.CancelInterview(interviewId);
        return Ok(status);
    }
}