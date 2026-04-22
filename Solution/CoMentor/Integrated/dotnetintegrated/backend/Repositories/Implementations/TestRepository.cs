using System.Linq;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Repositories
{
    public class CreateTestRepository : Interfaces.ICreateTestRepository
    {
        private readonly AppDbContext _context;

        public CreateTestRepository(AppDbContext context)
        {
            _context = context;
        }

        




   

    public async Task<List<QuestionDto>> GetQuestionsByConceptId(List<long> conceptIds, string type)
        {
            return await _context.QuestionFrameworkConcepts
                .Where(x => conceptIds.Contains(x.FrameworkConcepts!.ConceptId ?? 0))
                .Select(x => x.Question!)
                .Where(q => q.QuestionType == type)
                .Select(q => new QuestionDto
                {
                    Id = q.QuestionId,
                    Title = q.Description,
                    Type = q.QuestionType,
                    Level = q.DifficultyLevel
                })
                .Distinct()
                .ToListAsync();
        }

    public async Task<long> CreateTest(CreateTestRequestDto dto)
        {
            var test = new Test
            {
                Title = dto.Title,
                Duration = (int)dto.Duration,
        Difficulty = dto.SkillLevel,
        SmeRuntimeId = dto.SmeId,
                CreatedAt = DateTime.Now,
                Status = true
            };

            _context.Tests.Add(test);
            await _context.SaveChangesAsync();

            long seq = 1;

            if (dto.QuestionIds != null)
            {
                foreach (var q in dto.QuestionIds)
            {
                _context.TestQuestions.Add(new TestQuestion
                {
                        TestId = test.Id,
                        QuestionId = q,
                        SequenceOrder = (int)seq++
                });
            }
            }

            await _context.SaveChangesAsync();

            return test.Id;
        }
    }
}