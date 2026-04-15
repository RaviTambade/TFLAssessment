using Microsoft.EntityFrameworkCore;
using Backend.Models;

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
                Duration = (int?)t.Duration
            }).ToListAsync();
    }

    public async Task<List<StudentDto>> GetStudents()
    {
        return await (from u in _context.Users
                      join p in _context.PersonalInformations
                      on u.Id equals p.UserId
                      select new StudentDto
                      {
                          Id = (int)u.Id,
                          FullName = p.FullName ?? string.Empty
                      }).ToListAsync();
    }

    public async Task AssignAssessment(AssignAssessmentDto dto)
    {
        var assessments = new List<Assessment>();

        foreach (var studentId in dto.StudentIds)
        {
            assessments.Add(new Assessment
            {
                TestId = dto.TestId,
                StudentId = studentId,
                AssignedAt = DateTime.Now,
                ScheduledAt = dto.ScheduledAt,
                Status = "Assigned"
            });
        }

        await _context.Assessments.AddRangeAsync(assessments);
        await _context.SaveChangesAsync();
    }

    
}