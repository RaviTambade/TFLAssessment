using Microsoft.EntityFrameworkCore;
using backend.Models;

public class AssessmentAssignRepository : IAssessmentAssignRepository
{
    private readonly AppDbContext _context;

    public AssessmentAssignRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<TestDto>> GetTests()
    {
        return await _context.Tests
            .Select(t => new TestDto
            {
                Id = t.Id,
                Title = t.Title,
                Duration = t.Duration
            }).ToListAsync();
    }

    public async Task<List<StudentDto>> GetStudents()
    {
        return await (from u in _context.Users
                      join p in _context.PersonalInformations
                      on u.Id equals p.UserId
                      select new StudentDto
                      {
                          Id = u.Id,
                          FullName = p.FullName
                      }).ToListAsync();
    }

    public async Task CreateAssessment(CreateAssessmentDto dto)
    {
        var assessment = new Assessment
        {
            TestId = dto.TestId,
            StudentId = dto.StudentId,
            AssignedAt = DateTime.Now,
            ScheduledAt = dto.ScheduledAt,
            Status = "Assigned"
        };

        _context.Assessments.Add(assessment);
        await _context.SaveChangesAsync();
    }

    
}