


using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.DTOs;

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

    [HttpGet("questions")]
    public async Task<IActionResult> GetQuestionsByConceptIdAsync(
        [FromQuery] List<long> conceptIds,
        [FromQuery] string type,
        [FromQuery] string difficulty)
    {
        return Ok(await _service.GetQuestionsByConceptIdAsync(conceptIds, type, difficulty));
    }

    [HttpPost("create")]
    //http://localhost:5201/api/CreateTest/create
    public async Task<IActionResult> CreateTest([FromBody] CreateTestRequestDto dto)
    {
        var id = await _service.CreateTestAsync(dto);
        return Ok(new { TestId = id });
    }

    /// <summary>
    /// Add multiple questions to a test using Entity Framework Core
    /// POST /api/createtest/add-questions?testId=1
    /// </summary>
    [HttpPost("add-questions")]
    public async Task<IActionResult> AddQuestionsToTest([FromBody] AddQuestionsToTestRequestDto request, [FromQuery] long testId)
    {
        try
        {
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

}