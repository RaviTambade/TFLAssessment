using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

using backend.Models;

public class AssessmentRepository : IAssessmentRepository
{
    private readonly AppDbContext _context;
    public AssessmentRepository(AppDbContext context)
    {
        _context = context;
    }


    [HttpGet] 
    public async Task<List<AssessmentDto>> GetAllAssessments()
    {

        var data = await (
            from a in _context.assessments

join t in _context.tests on a.test_id equals t.id into testGroup
from t in testGroup.DefaultIfEmpty()

join u in _context.users on a.student_id equals u.id into userGroup
from u in userGroup.DefaultIfEmpty()

join p in _context.personal_informations on u.id equals p.user_id into personalGroup
from p in personalGroup.DefaultIfEmpty()
    select new AssessmentDto
    {
        AssessmentTitle  = t != null ? t.title      : "N/A",
        FullName = p != null ? p.first_name  : "N/A",
        DifficultyLevel  = t != null ? t.difficulty : "N/A",
        Status           = a.status.ToString()
    }
).ToListAsync();

        // Add SR NO manually
        for (int i = 0; i < data.Count; i++)
        {
            data[i].SrNo = i + 1;
        }

        return data;
    }
}