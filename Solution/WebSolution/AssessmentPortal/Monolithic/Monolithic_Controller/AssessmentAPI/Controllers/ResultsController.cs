//using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Services;
//using MySqlx.XDevAPI.Common;


[ApiController]
[Route("api/[controller]")]
public class ResultController : ControllerBase
{ 
    private readonly ILogger<ResultController> _logger;
    private readonly IResultService _svc;

    public ResultController (IResultService service, ILogger<ResultController > logger)
    {
        _svc=service;
        _logger= logger;
    }


    //get candidate score with storedprocedure .
    //http://localhost:5235/api/Result/candidates/1/tests/1/score
    [HttpGet("candidates/{candidateId}/tests/{testId}/score")]
    public async Task<IActionResult> GetCandidateScore(int candidateId, int testId)
    {      
        int result = await _svc.GetCandidateScore(candidateId,testId);
        _logger.LogInformation("Log Generated For get candidate score with storedprocedure");
        return Ok(result);
    }

    //set starttime in the test .
    [HttpPost("setstarttime/{candidateId}/tests/{testId}")]
    public async Task<IActionResult> SetCandidateTestStartTime(int candidateId, int testId, TestTime time)
    {      
        bool status = await _svc.SetCandidateTestStartTime(candidateId,testId,time);
        _logger.LogInformation("Log Generated For set starttime in the test");
        return Ok(status);
    }



    //set endtime in the test .
    [HttpPut("setendtime/{candidateId}/tests/{testId}")]
    public async Task<IActionResult> SetCandidateTestEndTime(int candidateId, int testId, TestTime time)
    {   
        bool status =await _svc.SetCandidateTestEndTime(candidateId,testId,time);
       _logger.LogInformation("Log Generated For set endtime in the test");
        return Ok(status);
    }

    

    //get candidate details of test.
    //http://localhost:5235/api/Result/candidates/1/tests/1/details
    [HttpGet("candidates/{candidateId}/tests/{testId}/details")]
    public async Task<IActionResult> GetCandidatetResultDetails(int candidateId, int testId)
    {   
        
        CandidateResultDetails result = await _svc.CandidateTestResultDetails(candidateId,testId);
       _logger.LogInformation("Log Generated For get candidate details of test");
        return Ok(result);
    }



    //get test result details .
    //http://localhost:5235/tests/1/details
    [HttpGet("/tests/{testId}/details")]
    public async Task<IActionResult> GetTestResultDetails(int testId)
    {   
        
        List<TestResultDetails> result =await _svc.GetTestResultDetails(testId);
        _logger.LogInformation("Log Generated For get test result details");
       
        return Ok(result);
    }



    //get appeared candidates of the test .
    [HttpGet("/candidates/tests/{testId}")]
    public async Task<IActionResult> GetAppearedCandidates(int testId)
    {   
        
        List<AppearedCandidate> candidates =await _svc.GetAppearedCandidates(testId);
        _logger.LogInformation("Log Generated For get appeared candidates of the test");
        return Ok(candidates);
    }


    //get passed candidates of the test .
    [HttpGet("/passedcandidates/tests/{testId}")]
    public async Task<IActionResult> GetPassedCandidate(int testId)
    {   
        
        List<PassedCandidateDetails> results =await _svc.GetPassedCandidateResults(testId);
        _logger.LogInformation("Log Generated For get passed candidates of the test");
        return Ok(results);
    }
        

        
    //get  failedcandidates of the test .
    [HttpGet("/failedcandidates/tests/{testId}")]
    public async Task<IActionResult> GetFailedCandidate(int testId)
    {   
        
        List<FailedCandidateDetails> results =await _svc.GetFailedCandidateResults(testId);
         _logger.LogInformation("Log Generated For get  failedcandidates of the test ");
        return Ok(results);
    }

    
    [HttpPut("/setpassinglevel/{testId}/passingLevel/{passingLevel}")]
    public async Task<IActionResult> SetPassingLevel(int testId,int passingLevel)
    {   
        
        bool status = await _svc.SetPassingLevel(testId,passingLevel);
        _logger.LogInformation("Log Generated For Set Passing Level of the test ");
        return Ok(status);
    }


    [HttpGet("/results/subjectresults/{subjectId}")]
    public async Task<IActionResult> GetSubjectResultDetails(int subjectId)
    {   
        List<CandidateSubjectResults> results =await _svc.GetSubjectResultDetails(subjectId);
       _logger.LogInformation("Log Generated For get  Get Subject Result Details");
        return Ok(results);
    }
}
