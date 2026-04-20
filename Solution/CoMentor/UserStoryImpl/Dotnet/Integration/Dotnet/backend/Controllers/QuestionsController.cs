using Microsoft.AspNetCore.Mvc;
using backend.Services.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;
namespace backend.Controllers;
using backend.DTOs;

[ApiController]
[Route("api/[controller]")]
public class QuestionsController : ControllerBase
{
    private readonly AppDbContext _context;

    public QuestionsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("{questionId}")]
    public async Task<IActionResult> GetQuestionById(long questionId)
    {
        try
        {
            var question = await _context.Questions
                .Where(q => q.QuestionId == questionId)
                .FirstOrDefaultAsync();

            if (question == null)
            {
                return NotFound(new { message = "Question not found" });
            }

            return Ok(question);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }

    [HttpGet("tests/{testId}")]
    public async Task<IActionResult> GetQuestionsByTestId(long testId)
    {
        try
        {
            var questions = await (
                from tq in _context.TestQuestions
                join q in _context.Questions on tq.QuestionId equals q.QuestionId
                where tq.TestId == testId
                orderby tq.SequenceOrder
                select q
            ).ToListAsync();

            if (questions.Count == 0)
            {
                return NotFound(new { message = "No questions found for the specified test" });
            }

            return Ok(questions);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }

    [HttpGet("concepts/{conceptId}")]
    public async Task<IActionResult> GetQuestionsByConceptId(long conceptId)
    {
        try
        {
            var questions = await (
                from qfc in _context.QuestionFrameworkConcepts
                join q in _context.Questions on qfc.QuestionId equals q.QuestionId
                join fc in _context.FrameworkConcepts on qfc.FrameworkId equals fc.FrameworkId
                where fc.ConceptId == conceptId
                select q
            ).Distinct().ToListAsync();

            if (questions.Count == 0)
            {
                return NotFound(new { message = "No questions found for the specified concept" });
            }

            return Ok(questions);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }

    [HttpGet("frameworks/{frameworkId}")]
    public async Task<IActionResult> GetQuestionsByFrameworkId(long frameworkId)
    {
        try
        {
            var questions = await (
                from qfc in _context.QuestionFrameworkConcepts
                join q in _context.Questions on qfc.QuestionId equals q.QuestionId
                where qfc.FrameworkId == frameworkId
                select q
            ).Distinct().ToListAsync();

            if (questions.Count == 0)
            {
                return NotFound(new { message = "No questions found for the specified framework" });
            }

            return Ok(questions);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }

    [HttpGet("languages/{languageId}")]
    public async Task<IActionResult> GetQuestionsByLanguageId(long languageId)
    {
        try
        {
            var questions = await (
                from lr in _context.LearningResources
                join q in _context.Questions on lr.QuestionId equals q.QuestionId
                where lr.LanguageId == languageId
                select q
            ).Distinct().ToListAsync();

            if (questions.Count == 0)
            {
                return NotFound(new { message = "No questions found for the specified language" });
            }

            return Ok(questions);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }
}
