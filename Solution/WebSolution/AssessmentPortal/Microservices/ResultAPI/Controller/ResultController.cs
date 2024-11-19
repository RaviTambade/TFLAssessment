using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
using Microsoft.Extensions.Logging;

namespace Transflower.TFLAssessment.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResultController : ControllerBase
    { 
        private readonly ILogger<ResultController> _logger;
        private readonly IResultService _svc;

        public ResultController(IResultService service, ILogger<ResultController> logger)
        {
            _svc = service;
            _logger = logger;
        }

        // Get All subjects .
        // URL: http://localhost:5235/api/Result/subjects 

        [HttpGet("subjects")]
        public async Task<IActionResult> GetAllSubjects()
        {   
            List<Subject> subjects = await _svc.GeAllSubjects();
            _logger.LogInformation("Log Generated For get Subject Result Details");
            return Ok(subjects);
        }
        
        // Get candidate score with stored procedure.
        // URL: http://localhost:5235/api/Result/candidates/1/tests/1/score
        [HttpGet("candidates/{candidateId}/tests/{testId}/score")]
        public async Task<IActionResult> GetCandidateScore(int candidateId, int testId)
        {      
            int result = await _svc.GetCandidateScore(candidateId, testId);
            _logger.LogInformation("Log Generated For get candidate score with stored procedure");
            return Ok(result);
        }

        // Set start time in the test.
        // URL: http://localhost:5235/api/Result/setstarttime/1/tests/1
        [HttpPost("setstarttime/{candidateId}/tests/{testId}")]
        public async Task<IActionResult> SetCandidateTestStartTime(int candidateId, int testId, [FromBody] TestTime time)
        {      
            bool status = await _svc.SetCandidateTestStartTime(candidateId, testId, time);
            _logger.LogInformation("Log Generated For set start time in the test");
            return Ok(status);
        }

        // Set end time in the test.
        // URL: http://localhost:5235/api/Result/setendtime/1/tests/1
        [HttpPut("setendtime/{candidateId}/tests/{testId}")]
        public async Task<IActionResult> SetCandidateTestEndTime(int candidateId, int testId, [FromBody] TestTime time)
        {   
            bool status = await _svc.SetCandidateTestEndTime(candidateId, testId, time);
            _logger.LogInformation("Log Generated For set end time in the test");
            return Ok(status);
        }

        // Get candidate details of test.
        // URL: http://localhost:5235/api/Result/candidates/1/tests/1/details
        [HttpGet("candidates/{candidateId}/tests/{testId}/details")]
        public async Task<IActionResult> GetCandidateResultDetails(int candidateId, int testId)
        {   
            CandidateResultDetails result = await _svc.CandidateTestResultDetails(candidateId, testId);
            _logger.LogInformation("Log Generated For get candidate details of test");
            return Ok(result);
        }

        // Get test result details.
        // URL: http://localhost:5235/api/Result/tests/1/details
        [HttpGet("tests/{testId}/details")]
        public async Task<IActionResult> GetTestResultDetails(int testId)
        {   
            List<TestResultDetails> result = await _svc.GetTestResultDetails(testId);
            _logger.LogInformation("Log Generated For get test result details");
            return Ok(result);
        }

        // Get appeared candidates of the test.
        // URL: http://localhost:5235/api/Result/candidates/tests/1
        [HttpGet("candidates/tests/{testId}")]
        public async Task<IActionResult> GetAppearedCandidates(int testId)
        {   
            List<AppearedCandidate> candidates = await _svc.GetAppearedCandidates(testId);
            _logger.LogInformation("Log Generated For get appeared candidates of the test");
            return Ok(candidates);
        }

        // Get passed candidates of the test.
        // URL: http://localhost:5235/api/Result/passedcandidates/tests/1
        [HttpGet("passedcandidates/tests/{testId}")]
        public async Task<IActionResult> GetPassedCandidate(int testId)
        {   
            List<PassedCandidateDetails> results = await _svc.GetPassedCandidateResults(testId);
            _logger.LogInformation("Log Generated For get passed candidates of the test");
            return Ok(results);
        }

        // Get failed candidates of the test.
        // URL: http://localhost:5235/api/Result/failedcandidates/tests/1
        [HttpGet("failedcandidates/tests/{testId}")]
        public async Task<IActionResult> GetFailedCandidate(int testId)
        {   
            List<FailedCandidateDetails> results = await _svc.GetFailedCandidateResults(testId);
            _logger.LogInformation("Log Generated For get failed candidates of the test");
            return Ok(results);
        }

        // Set passing level of the test.
        // URL: http://localhost:5235/api/Result/setpassinglevel/1/passingLevel/70
        [HttpPut("setpassinglevel/{testId}/passingLevel/{passingLevel}")]
        public async Task<IActionResult> SetPassingLevel(int testId, int passingLevel)
        {   
            bool status = await _svc.SetPassingLevel(testId, passingLevel);
            _logger.LogInformation("Log Generated For Set Passing Level of the test");
            return Ok(status);
        }

         // URL: http://localhost:5235/api/Result/testlist/1
        [HttpGet("testlist/{candidateId}")]
        public async Task<IActionResult>GetTestList(int candidateId)
        {
            List<TestList> results = await _svc.GetTestList(candidateId);
            return Ok(results);
        }

        // Get subject result details.
        // URL: http://localhost:5235/api/Result/results/subjectresults/1
        [HttpGet("results/subjectresults/{subjectId}")]
        public async Task<IActionResult> GetSubjectResultDetails(int subjectId)
        {   
            List<CandidateSubjectResults> results = await _svc.GetSubjectResultDetails(subjectId);
            _logger.LogInformation("Log Generated For get Subject Result Details");
            return Ok(results);
        }
    }
}
