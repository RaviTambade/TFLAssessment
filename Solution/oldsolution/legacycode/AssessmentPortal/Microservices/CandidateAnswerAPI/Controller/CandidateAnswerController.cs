using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;


//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/candidateanswer")]
public class CandidateAnswerController : ControllerBase
{
    private readonly ILogger<CandidateAnswerController> _logger;
    private readonly ICandidateAnswerService _service;
    public CandidateAnswerController(ICandidateAnswerService service, ILogger<CandidateAnswerController> logger)
    {
        _service = service;
        _logger = logger;
    }

    // Insert candidate answers of the test .
    [HttpPost("assessmentanswers/candidates/{candidateId}")]
    public async Task<IActionResult> InsertCandidateAnswers(int candidateId, [FromBody] List<CandidateAnswer> answers)
    {
        bool status = await _service.InsertCandidateAnswers(candidateId, answers);
        if (!status)
        {
            _logger.LogError("Failed to insert candidate answers for candidate ID: {CandidateId}", candidateId);
            return BadRequest("Failed to insert candidate answers.");
        }
        _logger.LogInformation("Candidate answers inserted successfully for candidate ID: {CandidateId}", candidateId);
        return Ok(new { message = "Candidate answers inserted successfully.", status = status });
    }

    [HttpGet("assessmentanswers/candidates/{candidateId}/testId/{testId}")]
    public async Task<IActionResult> GetCandidateAnswers(int candidateId, int testId)
    {

        Console.WriteLine("GetCandidateAnswers called with candidateId: " + candidateId + " and testId: " + testId);
        List<CandidateAnswer> answers = await _service.GetCandidateAnswers(candidateId, testId);
        if (answers == null || answers.Count == 0)
        {
            _logger.LogWarning("No answers found for candidate ID: {CandidateId} and test ID: {TestId}", candidateId, testId);
            return NotFound("No answers found for the specified candidate and test.");
        }
        _logger.LogInformation("Retrieved answers for candidate ID: {CandidateId} and test ID: {TestId}", candidateId, testId);
        return Ok(answers);
    }

    //http://localhost:5299/api/candidateanswer/assessmentanswers/candidates/1/tests/1/results
    [HttpGet("assessmentanswers/candidates/{candidateId}/tests/{testId}/results")]
    public async Task<IActionResult> GetCandidateAnswerResults(int candidateId, int testId)
    {
        _logger.LogInformation(
            "GetCandidateAnswerResults called with candidateId: {cand}, testId: {t}",
            candidateId,
            testId);

        List<CandidateAnswerResult> results =
            await _service.GetCandidateAnswerResultsAsync(candidateId, testId);

        if (results == null || results.Count == 0)
        {
            _logger.LogWarning(
                "No answers found for candidate {cand} test {t}",
                candidateId,
                testId);
            return NotFound("No answers found for the specified candidate and test.");
        }
        return Ok(results);
    }

    //Get candidate and test details for the candidate answers
    [HttpGet("assessmentanswers/candidates/{candidateId}/tests/{testId}/details")]
    public async Task<IActionResult> GetCandidateTestDetails(int candidateId, int testId)
    {
        _logger.LogInformation(
            "GetCandidateTestDetails called with candidateId: {cand}, testId: {t}",
            candidateId,
            testId);

        CandidateTestDetails details =
            await _service.GetCandidateTestDetails(candidateId, testId);

        if (details == null)
        {
            _logger.LogWarning(
                "No details found for candidate {cand} test {t}",
                candidateId,
                testId);
            return NotFound("No details found for the specified candidate and test.");
        }
        return Ok(details);
    }
    
}