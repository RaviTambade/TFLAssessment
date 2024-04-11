using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using InterviewEntities; //-----------------------dll
using InterviewInterfaces;//-----------------------dll
using InterviewServices;//------------------------dll

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/interviews")]
public class InterviewsController : ControllerBase
{ 
        public InterviewsController()
        {
            // Initialize with some sample data
            
        } 
        IInterviewService _svc = new InterviewService();
      
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

        [HttpPut("{interviewId}/date/{date}")]
        public IActionResult RescheduleInterview(int interviewId,DateTime date)
        {
            bool status=_svc.RescheduleInterview(interviewId,date);
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