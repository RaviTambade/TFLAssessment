using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.DTO.Requests;
using backend.DTO.Responses;


[Route("api/[controller]")]
[ApiController]
public class CreateTestController : ControllerBase
{
    private readonly backend.Services.Interfaces.ICreateTestService _service;
    private readonly AppDbContext _context;
    private readonly ILogger<CreateTestController> _logger;

    public CreateTestController(
        backend.Services.Interfaces.ICreateTestService service,
        AppDbContext context,
        ILogger<CreateTestController> logger)
    {
        _service = service;
        _context = context;
        _logger = logger;
    }

    //http://localhost:5201/api/CreateTest/questions/{userId}
    [HttpGet("questions/{userId}")]
    public async Task<IActionResult> GetQuestionsBySMEAsync(
        [FromRoute] long userId)
    {
        try
        {
            if (userId <= 0)
                return BadRequest(new { message = "Invalid userId supplied." });

            var questions = await _service.GetQuestionsBySMEAsync(userId);

            if (questions == null || !questions.Any())
                return NotFound(new { message = "No questions found for this user." });

            return Ok(questions);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching questions for userId {UserId}", userId);
            return StatusCode(500, new { message = "Internal server error", error = ex.Message });
        }
    }



    [HttpPost("create")]
    //http://localhost:5201/api/CreateTest/create
    public async Task<IActionResult> CreateTest([FromBody] CreateTestRequests dto)
    {
        try
        {
            var id = await _service.CreateTestAsync(dto);
            return Ok(new { TestId = id });
        }
        catch (ArgumentException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating test");
            return StatusCode(500, new { message = "Internal server error", error = ex.Message });
        }
    }

    /// <summary>
    /// Add multiple questions to a test using Entity Framework Core
    /// POST /api/createtest/add-questions?testId=1
    /// </summary>
    
    
    [HttpPut("cancel/{id}")]
    public async Task<IActionResult> CancelTest(int id)
    {
        var result = await _service.CancelTestAsync(id);

        if (!result)
        {
            return NotFound("Test not found");
        }

        return Ok("Test cancelled successfully");
    }
    
    
    [HttpPost("add-questions")]
    public async Task<IActionResult> AddQuestionsToTest([FromBody] AddQuestionsToTestRequest request, [FromQuery] long testId)
    {
        try
        {

            // Console.WriteLine("Adding questions to test");
            // foreach (var qId in request.QuestionIds)
            // {
            //     Console.WriteLine($"Question ID: {qId}");
            // }
            // Validate inputs
            if (request?.QuestionIds == null || request.QuestionIds.Count == 0)
            {
                return BadRequest(new { message = "Questions list cannot be empty" });
            }

            if (testId <= 0)
            {
                return BadRequest(new { message = "Invalid test ID" });
            }

            var questionsIds = request.QuestionIds;
            _logger.LogInformation($"Adding questions to test {testId}. Questions: {string.Join(",", questionsIds)}");

            // Verify test exists
            var testExists = await _context.Tests.AnyAsync(t => t.Id == testId);
            if (!testExists)
            {
                _logger.LogWarning($"Test with ID {testId} not found");
                return NotFound(new { message = $"Test with ID {testId} not found" });
            }

            // Get existing question IDs for this test to avoid duplicates
            var existingQuestionIds = await _context.TestQuestions
                .Where(tq => tq.TestId == testId)
                .Select(tq => tq.QuestionId)
                .ToListAsync();

            // Get max sequence order
            var maxSequenceOrder = await _context.TestQuestions
                .Where(tq => tq.TestId == testId)
                .MaxAsync(tq => (int?)tq.SequenceOrder) ?? 0;

            var testQuestionsToAdd = new List<TestQuestion>();
            int currentSequenceOrder = maxSequenceOrder;

            foreach (var questionId in questionsIds)
            {
                // Skip if already exists
                if (existingQuestionIds.Contains(questionId))
                {
                    _logger.LogWarning($"Question {questionId} already exists in test {testId}");
                    continue;
                }

                // Verify question exists
                var questionExists = await _context.Questions.AnyAsync(q => q.QuestionId == questionId);
                if (!questionExists)
                {
                    _logger.LogWarning($"Question with ID {questionId} not found in database");
                    continue;
                }

                currentSequenceOrder++;
                testQuestionsToAdd.Add(new TestQuestion
                {
                    TestId = testId,
                    QuestionId = questionId,
                    SequenceOrder = currentSequenceOrder
                });
            }

            // Add to database if there are new questions
            if (testQuestionsToAdd.Count > 0)
            {
                _context.TestQuestions.AddRange(testQuestionsToAdd);
                await _context.SaveChangesAsync();
                _logger.LogInformation($"Successfully added {testQuestionsToAdd.Count} questions to test {testId}");
            }

            return Ok(new
            {
                message = "Questions added  successfully",
                testId,
                addedCount = testQuestionsToAdd.Count,
                skippedCount = questionsIds.Count - testQuestionsToAdd.Count
            });
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error adding questions to test: {ex.Message}");
            return StatusCode(500, new { message = "An error occurred while adding questions", error = ex.Message });
        }
    }

   

        [HttpGet("20questions")]
        public async Task<IActionResult> GetQuestions()
        {
            try
            {
                var questions = await _context.Questions
                    .OrderBy(q => q.QuestionId)
                    .Take(20)
                    .ToListAsync();

                return Ok(questions);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "Error fetching questions",
                    error = ex.Message
                });
            }
        }


        [HttpGet("GetSmeCreatedTest/{userId}")]
        public async Task<IActionResult> GetSmeCreatedTest(long userId)
        {
            {
                var result = await _service.GetSmeCreatedTestAsync(userId);
                return Ok(result);
            }
        }

        [HttpGet("testDetailsForMentor")]
        public async Task<IActionResult> GetTestDetailsForMentor()
    {
        var result= await _service.GetTestDetailsForMentor();
        return Ok(result);
    }

    [HttpGet("testStudentDetails/{TestId}")]
     public async Task<IActionResult> GetTestStudentsDetails(long TestId)
    {
        var result=await _service.GetTestStudentsDetails(TestId);
        return Ok(result);
    }

    [HttpGet("testCount")]
    public async Task<IActionResult> GetTestCount()
    {
        return Ok(await _service.GetTestCount());
    }
    
    [HttpGet("mentee/Count/{userId}")]
    public async Task<IActionResult> GetMenteeCount(long userId)
    {
        return Ok(await _service.GetMenteeCount(userId));
    }
    

}
