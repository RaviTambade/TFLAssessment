using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ResultEntity;
using ResultInterfaces;
using ResultServices;


[ApiController]
[Route("api/[controller]")]
public class ResultController : ControllerBase
{ 
    IResultService _svc = new ResultService();
    public ResultController()
    {   
        
    }
    

    //get candidate score with storedprocedure .
    //http://localhost:5235/api/Result/candidates/1/tests/1/score
    [HttpGet("candidates/{candidateId}/tests/{testId}/score")]
    public IActionResult GetCandidateScore(int candidateId, int testId)
    {      
        int result = _svc.GetCandidateScore(candidateId,testId);
        return Ok(result);
    }

    //set starttime in the test .

    [HttpPost("setstarttime/{candidateId}/tests/{testId}")]
    public IActionResult SetCandidateTestStartTime(int candidateId, int testId, TestTime time)
    {      
        bool status = _svc.SetCandidateTestStartTime(candidateId,testId,time);
        return Ok(status);
    }



    //set endtime in the test .
    [HttpPut("setendtime/{candidateId}/tests/{testId}")]
    public IActionResult SetCandidateTestEndTime(int candidateId, int testId, TestTime time)
    {   
        bool status = _svc.SetCandidateTestEndTime(candidateId,testId,time);
        return Ok(status);
    }

    

    //get candidate details of test.
    //http://localhost:5235/api/Result/candidates/1/tests/1/details
    [HttpGet("candidates/{candidateId}/tests/{testId}/details")]
    public IActionResult GetCandidatetResultDetails(int candidateId, int testId)
    {   
        
        CandidateResultDetails result = _svc.CandidateTestResultDetails(candidateId,testId);
        return Ok(result);
    }



    //get test result details .
    //http://localhost:5235/tests/1/details
    [HttpGet("/tests/{testId}/details")]
    public IActionResult GetTestResultDetails(int testId)
    {   
        
        List<TestResultDetails> result = _svc.GetTestResultDetails(testId);
        return Ok(result);
    }



    //get appeared candidates of the test .
    [HttpGet("/candidates/tests/{testId}")]
    public IActionResult GetAppearedCandidates(int testId)
    {   
        
        List<AppearedCandidate> candidates = _svc.GetAppearedCandidates(testId);
        return Ok(candidates);
    }


    //get passed candidates of the test .
    [HttpGet("/passedcandidates/tests/{testId}")]
    public IActionResult GetPassedCandidate(int testId)
    {   
        
        List<PassedCandidateDetails> results = _svc.GetPassedCandidateResults(testId);
        return Ok(results);
    }
        

        
    //get  failedcandidates of the test .
    [HttpGet("/failedcandidates/tests/{testId}")]
    public IActionResult GetFailedCandidate(int testId)
    {   
        
        List<FailedCandidateDetails> results = _svc.GetFailedCandidateResults(testId);
        return Ok(results);
    }

    
    [HttpPut("/setpassinglevel/{testId}/passingLevel/{passingLevel}")]
    public IActionResult SetPassingLevel(int testId,int passingLevel)
    {   
        
        bool status = _svc.SetPassingLevel(testId,passingLevel);
        return Ok(status);
    }


    [HttpGet("/results/subjectresults/{subjectId}")]
    public IActionResult GetSubjectResultDetails(int subjectId)
    {   
        
        List<CandidateSubjectResults> results = _svc.GetSubjectResultDetails(subjectId);
        return Ok(results);
    }
}
