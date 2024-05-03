using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Services;


[ApiController]
[Route("api/[controller]")]
public class ResultController : ControllerBase
{ 
    private readonly ILogger<ResultController> _logger;
    private readonly IResultService _svc;
    

    public ResultController (IResultService service)
    {
        _svc=service;
    }


    //get candidate score with storedprocedure .
    //http://localhost:5235/api/Result/candidates/1/tests/1/score
    [HttpGet("candidates/{candidateId}/tests/{testId}/score")]
    public async Task<IActionResult> GetCandidateScore(int candidateId, int testId)
    {      
        int result = await _svc.GetCandidateScore(candidateId,testId);
        return Ok(result);
    }

    //set starttime in the test .

    [HttpPost("setstarttime/{candidateId}/tests/{testId}")]
    public async Task<IActionResult> SetCandidateTestStartTime(int candidateId, int testId, TestTime time)
    {      
        bool status = await _svc.SetCandidateTestStartTime(candidateId,testId,time);
        return Ok(status);
    }



    //set endtime in the test .
    [HttpPut("setendtime/{candidateId}/tests/{testId}")]
    public async Task<IActionResult> SetCandidateTestEndTime(int candidateId, int testId, TestTime time)
    {   
        bool status =await _svc.SetCandidateTestEndTime(candidateId,testId,time);
        return Ok(status);
    }

    

    //get candidate details of test.
    //http://localhost:5235/api/Result/candidates/1/tests/1/details
    [HttpGet("candidates/{candidateId}/tests/{testId}/details")]
    public async Task<IActionResult> GetCandidatetResultDetails(int candidateId, int testId)
    {   
        
        CandidateResultDetails result = await _svc.CandidateTestResultDetails(candidateId,testId);
        return Ok(result);
    }



    //get test result details .
    //http://localhost:5235/tests/1/details
    [HttpGet("/tests/{testId}/details")]
    public async Task<IActionResult> GetTestResultDetails(int testId)
    {   
        
        List<TestResultDetails> result =await _svc.GetTestResultDetails(testId);
        return Ok(result);
    }



    //get appeared candidates of the test .
    [HttpGet("/candidates/tests/{testId}")]
    public async Task<IActionResult> GetAppearedCandidates(int testId)
    {   
        
        List<AppearedCandidate> candidates =await _svc.GetAppearedCandidates(testId);
        return Ok(candidates);
    }


    //get passed candidates of the test .
    [HttpGet("/passedcandidates/tests/{testId}")]
    public async Task<IActionResult> GetPassedCandidate(int testId)
    {   
        
        List<PassedCandidateDetails> results =await _svc.GetPassedCandidateResults(testId);
        return Ok(results);
    }
        

        
    //get  failedcandidates of the test .
    [HttpGet("/failedcandidates/tests/{testId}")]
    public async Task<IActionResult> GetFailedCandidate(int testId)
    {   
        
        List<FailedCandidateDetails> results =await _svc.GetFailedCandidateResults(testId);
        return Ok(results);
    }

    
    [HttpPut("/setpassinglevel/{testId}/passingLevel/{passingLevel}")]
    public async Task<IActionResult> SetPassingLevel(int testId,int passingLevel)
    {   
        
        bool status = await _svc.SetPassingLevel(testId,passingLevel);
        return Ok(status);
    }


    [HttpGet("/results/subjectresults/{subjectId}")]
    public async Task<IActionResult> GetSubjectResultDetails(int subjectId)
    {   
        
        List<CandidateSubjectResults> results =await _svc.GetSubjectResultDetails(subjectId);
        return Ok(results);
    }
}
