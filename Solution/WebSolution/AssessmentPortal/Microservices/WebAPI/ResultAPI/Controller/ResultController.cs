using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ResultEntity;
using ResultInterfaces;
using ResultServices;


[ApiController]
[Route("api/[controller]")]
public class ResultController : ControllerBase
{ 
        public ResultController()
        {
            
            
        }
        
     
        [HttpGet]
        public IActionResult Get()
        {
            return Ok( );
        }

      
        [HttpGet("candidates/{candidateId}/tests/{testId}/score")]
        public IActionResult GetCandidateScore(int candidateId, int testId)
        {   
            IResultService _svc = new ResultService();
            int result = _svc.GetCandidateTestScore(candidateId,testId);
            Console.WriteLine(result);
            return Ok(result);
        }

        [HttpPost("setstarttime/{candidateId}/tests/{testId}")]
        public IActionResult SetCandidateTestStartTime(int candidateId, int testId, TestTime time)
         {   
            IResultService _svc = new ResultService();
            bool status = _svc.SetCandidateTestStartTime(candidateId,testId,time);
            return Ok(status);
        }

        [HttpPut("setendtime/{candidateId}/tests/{testId}")]
        public IActionResult SetCandidateTestEndTime(int candidateId, int testId, TestTime time)
         {   
            IResultService _svc = new ResultService();
            bool status = _svc.SetCandidateTestEndTime(candidateId,testId,time);
            return Ok(status);
        }


        [HttpGet("candidates/{candidateId}/tests/{testId}/details")]
        public IActionResult GetCandidatetResultDetails(int candidateId, int testId)
        {   
            IResultService _svc = new ResultService();
            CandidateResultDetails result = _svc.CandidateTestResultDetails(candidateId,testId);
            Console.WriteLine(result);
            return Ok(result);
        }

         [HttpGet("/tests/{testid}/details")]
        public IActionResult GetTestResultDetails(int testId)
        {   
            IResultService _svc = new ResultService();
            List<TestResultDetails> result = _svc.GetTestResultDetails(testId);
            return Ok(result);
        }

         [HttpGet("/candidates/tests/{testid}")]
         public IActionResult GetAppearedCandidates(int testId)
        {   
            IResultService _svc = new ResultService();
            List<AppearedCandidate> candidates = _svc.GetAppearedCandidates(testId);
            return Ok(candidates);
        }

        [HttpGet("/passedcandidates/tests/{testId}")]
        public IActionResult GetPassedCandidate(int testId)
        {   
            IResultService _svc = new ResultService();
            List<PassedCandidateDetails> results = _svc.GetPassedCandidateResults(testId);
            Console.WriteLine(results);
            return Ok(results);
        }
         
         [HttpGet("/failedcandidates/tests/{testId}")]
        public IActionResult GetFailedCandidate(int testId)
        {   
            IResultService _svc = new ResultService();
            List<FailedCandidateDetails> results = _svc.GetFailedCandidateResults(testId);
            Console.WriteLine(results);
            return Ok(results);
        }

       

        // public IActionResult SetPassingLevel(int testId,int passingLevel)
        // {   
        //     IResultService _svc = new ResultService();
        //     CandidateResultDetails result = _svc.SetPassingLevel(candidateId,testId);
        //     Console.WriteLine(result);
        //     return Ok(result);
        // }

        

}
