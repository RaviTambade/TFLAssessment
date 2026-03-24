using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
 // Add this line if TflcomentorDbContext is in backend.Data namespace

public class AssessmentRepository : IAssessmentRepository
{
    private readonly AppDbContext _context;

    public AssessmentRepository(AppDbContext context)
    {
        _context = context;
    }


   
    public async Task<List<AssessmentDto>> GetAllAssessments()
    {
        var data = await (from a in _context.Assessments
                  join t in _context.Tests on a.TestId equals t.Id into tt
                  from t in tt.DefaultIfEmpty()

                  join u in _context.Users on a.StudentId equals u.Id into uu
                  from u in uu.DefaultIfEmpty()

                  join p in _context.PersonalInformations on u.Id equals p.UserId into pp
                  from p in pp.DefaultIfEmpty()

                  select new AssessmentDto
                  {
                      AssessmentTitle = t != null ? t.Title : null,
                      FullName = p != null ? p.FullName : null,
                      DifficultyLevel = t != null ? t.Difficulty : null,
                      Status = a.Status
                  }).ToListAsync();

        // Add SR NO manually
        for (int i = 0; i < data.Count; i++)
        {
            data[i].SrNo = i + 1;
        }

        return data;
    }
}