using System.Linq;
using Microsoft.EntityFrameworkCore;
using backend.Entities;

namespace backend.Repositories
{
    public class CreateTestRepository : Interfaces.ICreateTestRepository
    {
        private readonly AppDbContext _context;

        public CreateTestRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<RuntimeDto>> GetRuntimes()
        {
            return await _context.Runtimes
                .Select(x => new RuntimeDto
                {
                    Id = x.Id,
                    Name = x.RuntimeName
                })
                .ToListAsync();
        }

    public async Task<List<LanguageDto>> GetLanguages(long runtimeId)
        {
            return await _context.Languages
        .Where(x => x.RuntimeId == runtimeId)
                .Select(x => new LanguageDto
                {
                    Id = x.Id,
                    Name = x.Language1
                })
                .ToListAsync();
        }

    public async Task<List<LayerDto>> GetLayers(long languageId)
        {
            return await _context.Layers
                .Select(l => new LayerDto
                {
                    Id = l.Id,
                    Name = l.Layers,
                    Frameworks = _context.Frameworks
            .Where(f => f.LayerId == l.Id && f.LanguageId == languageId)
                        .Select(f => new FrameworkDto
                        {
                            Id = f.Id,
                            Name = f.Name
                        }).ToList()
                })
                .ToListAsync();
        }

    public async Task<List<ConceptDto>> GetConcepts(List<long> frameworkIds)
        {
            return await _context.FrameworkConcepts
                .Where(x => frameworkIds.Contains(x.FrameworkId ?? 0))
                .Select(x => new ConceptDto
                {
                    Id = x.Concept!.Id,
                    Name = x.Concept!.Name
                })
                .Distinct()
                .ToListAsync();
        }

    public async Task<List<QuestionDto>> GetQuestions(List<long> conceptIds, string type)
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
                Duration = dto.Duration,
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
                        SequenceOrder = seq++
                });
            }
            }

            await _context.SaveChangesAsync();

            return test.Id;
        }
    }
}