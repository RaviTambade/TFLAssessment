using backend.DTOs;
using backend.Models;
using backend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services.Implementations;

public class TestService : ITestService
{
    private readonly AppDbContext _context;

    public TestService(AppDbContext context)
    {
        _context = context;
    }


    public async Task<List<TestDto>> GetAllTestsBySMEIdAsync(long smeId)
    {
        try
        {
            var tests = await (
                from t in _context.Tests
                where t.SmeId == smeId && t.Status == true
                orderby t.CreatedAt descending
                select new TestDto
                {
                    Id = t.Id,
                    Title = t.Title,
                    Duration = t.Duration,
                    Description = t.Description,
                    Difficulty = t.Difficulty
                }
            ).ToListAsync();

            return tests;
        }
        catch (Exception ex)
        {
            throw new Exception($"Error fetching tests by SME ID: {ex.Message}");
        }
    }


    public async Task<List<TestDto>> GetAllTestsByLanguageAsync(int languageId)
    {
        try
        {
            var tests = await (
                from tq in _context.TestQuestions
                join q in _context.Questions on tq.QuestionId equals q.QuestionId
                join qfc in _context.QuestionFrameworkConcepts on q.QuestionId equals qfc.QuestionId
                join f in _context.Frameworks on qfc.FrameworkId equals f.Id
                join t in _context.Tests on tq.TestId equals t.Id
                where f.LanguageId == languageId && t.Status == true
                select new TestDto
                {
                    Id = t.Id,
                    Title = t.Title,
                    Duration = t.Duration,
                    Description = t.Description,
                    Difficulty = t.Difficulty
                }
            ).Distinct().ToListAsync();

            return tests;
        }
        catch (Exception ex)
        {
            throw new Exception($"Error fetching tests by language ID: {ex.Message}");
        }
    }

    public async Task<List<TestDto>> GetAllTestsByAssessmentIdAsync(long assessmentId)
    {
        try
        {
            var tests = await (
                from a in _context.Assessments
                join t in _context.Tests on a.TestId equals t.Id
                where a.Id == assessmentId && t.Status == true
                select new TestDto
                {
                    Id = t.Id,
                    Title = t.Title,
                    Duration = t.Duration,
                    Description = t.Description,
                    Difficulty = t.Difficulty
                }
            ).ToListAsync();

            return tests;
        }
        catch (Exception ex)
        {
            throw new Exception($"Error fetching tests by assessment ID: {ex.Message}");
        }
    }

     public async Task<List<TestDto>> GetAllTestsByFrameworkAsync(int frameworkId)
    {
        try
        {
            var tests = await (
                from tq in _context.TestQuestions
                join q in _context.Questions on tq.QuestionId equals q.QuestionId
                join qfc in _context.QuestionFrameworkConcepts on q.QuestionId equals qfc.QuestionId
                join t in _context.Tests on tq.TestId equals t.Id
                where qfc.FrameworkId == frameworkId && t.Status == true
                select new TestDto
                {
                    Id = t.Id,
                    Title = t.Title,
                    Duration = t.Duration,
                    Description = t.Description,
                    Difficulty = t.Difficulty
                }
            ).Distinct().ToListAsync();

            return tests;
        }
        catch (Exception ex)
        {
            throw new Exception($"Error fetching tests by framework ID: {ex.Message}");
        }
    }

    public async Task<List<TestDto>> GetAllTestsByRuntimeAsync(int runtimeId)
    {
        try
        {
            var tests = await (
                from sr in _context.SmeRuntimes
                join t in _context.Tests on sr.UserId equals t.SmeId
                where sr.RuntimeId == runtimeId && t.Status == true
                orderby t.CreatedAt descending
                select new TestDto
                {
                    Id = t.Id,
                    Title = t.Title,
                    Duration = t.Duration,
                    Description = t.Description,
                    Difficulty = t.Difficulty
                }
            ).Distinct().ToListAsync();

            return tests;
        }
        catch (Exception ex)
        {
            throw new Exception($"Error fetching tests by runtime ID: {ex.Message}");
        }
    }
    public async Task<object> GetTestDetailsAsync(long testId)
    {
        try
        {
            var testDetails = await (
                from t in _context.Tests
                where t.Id == testId && t.Status == true
                select t
            ).FirstOrDefaultAsync();

            if (testDetails == null)
            {
                return null;
            }

            // Get all questions for this test
            var questions = await (
                from tq in _context.TestQuestions
                join q in _context.Questions on tq.QuestionId equals q.QuestionId
                where tq.TestId == testId
                orderby tq.SequenceOrder
                select new
                {
                    q.QuestionId,
                    q.Description,
                    q.QuestionType,
                    q.DifficultyLevel,
                    Sequence = tq.SequenceOrder
                }
            ).ToListAsync();

            // Get SME information
            var smeInfo = await (
                from u in _context.Users
                where u.Id == testDetails.SmeId
                select new
                {
                    u.Id,
                    u.Contact
                }
            ).FirstOrDefaultAsync();

            return new
            {
                TestId = testDetails.Id,
                Title = testDetails.Title,
                Description = testDetails.Description,
                Duration = testDetails.Duration,
                Difficulty = testDetails.Difficulty,
                CreatedAt = testDetails.CreatedAt,
                Status = testDetails.Status,
                SmeId = testDetails.SmeId,
                SmeInfo = smeInfo,
                TotalQuestions = questions.Count,
                Questions = questions
            };
        }
        catch (Exception ex)
        {
            throw new Exception($"Error fetching test details: {ex.Message}");
        }
    }
}
