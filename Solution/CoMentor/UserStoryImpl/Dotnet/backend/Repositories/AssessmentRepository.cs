using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

public class AssessmentRepository : IAssessmentRepository
{
    private readonly TflcomentorDbContext _context;

    public AssessmentRepository(TflcomentorDbContext context)
    {
        _context = context;
    }


    [HttpGet] 
    public async Task<List<AssessmentDto>> GetAllAssessments()
    {
        var data = await (from a in _context.Assessments
                          join t in _context.Tests on a.TestId equals t.Id
                          join u in _context.Users on a.StudentId equals u.Id
                          join p in _context.PersonalInformations on u.Id equals p.UserId
                          select new AssessmentDto
                          {
                              AssessmentTitle = t.Title,
                              StudentName = p.FirstName,
                              DifficultyLevel = t.difficultylevel, // if added
                              Status = (bool)a.Status ? "Assigned" : "Pending"
                          }).ToListAsync();

        // Add SR NO manually
        for (int i = 0; i < data.Count; i++)
        {
            data[i].SrNo = i + 1;
        }

        return data;
    }
}