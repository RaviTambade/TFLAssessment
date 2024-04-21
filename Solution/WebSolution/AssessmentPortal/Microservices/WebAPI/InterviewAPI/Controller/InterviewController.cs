using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using InterviewEntities; 
using InterviewInterfaces;
using InterviewServices;

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/interviews")]
public class InterviewsController : ControllerBase
{ 
    IInterviewService _svc = new InterviewService();
    public InterviewsController()
    {
        // Initialize with some sample data   
    } 
    
    [HttpGet("details")]
    public IActionResult GetAllInterviewCandidates()
    {
        List<InterviewCandidateDetails> details =_svc.GetAllInterviewCandidates();
        return Ok(details);
    }

    [HttpGet("candidate/{candidateId}")]
    public IActionResult GetInterviewedCandidatesSubjects(int candidateId)
    {
        List<InterviewCandidateDetails> details =_svc.GetInterviewedCandidatesSubjects(candidateId);
        return Ok(details);
    }

    [HttpGet("{interviewId}")]
    public IActionResult GetInterviewDetails(int interviewId)
    {
        InterviewDetails details =_svc.GetInterviewDetails(interviewId);
        return Ok(details); 
    }

    //3 seperate functions for updating date, time 
    [HttpPut("{interviewId}/date/{date}")]
    public IActionResult RescheduleInterview(int interviewId,DateTime date)
    {
        bool status=_svc.RescheduleInterview(interviewId,date);
        return Ok(status);
    }

    [HttpPut("{interviewId}/time/{time}")]
    public IActionResult RescheduleInterview(int interviewId,string time)
    {
        bool status=_svc.RescheduleInterview(interviewId,time);
        return Ok(status);
    }

    [HttpPut("{interviewId}/time/{time}/date/{date}")]
    public IActionResult RescheduleInterview(int interviewId,string time,DateTime date)
    {
        bool status=_svc.RescheduleInterview(interviewId,time,date);
        return Ok(status);
    }

    [HttpPut("{interviewId}/subjectexperts/{smeId}")]
    public IActionResult ChangeInterviewer(int interviewId, int smeId)
    {
        bool status=_svc.ChangeInterviewer(interviewId,smeId);
        return Ok(status);
    }

    [HttpDelete("{interviewId}")]
    public  IActionResult CancelInterview(int interviewId)
    {
        bool status=_svc.CancelInterview(interviewId);
        return Ok(status);

    }
}