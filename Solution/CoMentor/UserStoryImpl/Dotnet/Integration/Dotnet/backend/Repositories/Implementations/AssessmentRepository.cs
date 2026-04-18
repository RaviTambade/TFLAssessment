using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.DTOs;
using backend.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;   
using System.Linq;
public class AssessmentRepository : IAssessmentRepository
{


    private readonly AppDbContext _context;
     public AssessmentRepository(AppDbContext context)
    {
        _context = context;
    }
[HttpGet]
public async Task<List<UpcomingAssessmentDto>> GetAllUpcomingAssessments(long userId)
{
    var data = await (
        from a in _context.Assessments

        join t in _context.Tests
            on a.TestId equals t.Id into at
        from t in at.DefaultIfEmpty()

        join s in _context.PersonalInformations
            on a.StudentId equals s.UserId into st
        from s in st.DefaultIfEmpty()

        join c in _context.PersonalInformations
            on a.AssignedBy equals c.UserId into ct
        from c in ct.DefaultIfEmpty()

        join ur in _context.UserRoles
            on a.StudentId equals ur.UserId into urt
        from ur in urt.DefaultIfEmpty()

        join r in _context.Roles
            on ur.RoleId equals r.RoleId into rt
        from r in rt
            .Where(x => x.RoleName.ToLower() == "student")
            .DefaultIfEmpty()

        where a.StudentId == userId
           && (a.Status.ToString() == "Assigned")

        orderby a.ScheduledAt ascending

        select new UpcomingAssessmentDto
        {
            SrNo = 0,
            AssessmentName = t != null ? t.Title : null,
            ScheduledAt = a.ScheduledAt,
            Duration = t != null ? t.Duration : null,
            Status = a.Status.ToString()
        }
    ).ToListAsync();

    // ✅ SR NO assignment (INSIDE method)
    for (int i = 0; i < data.Count; i++)
    {
        data[i].SrNo = i + 1;
    }

    return data; // ✅ REQUIRED
}

[HttpGet] 
    public async Task<List<AllAssessmentDto>> GetAllAssessments()
    {

        var data = await (
            from a in _context.Assessments

join t in _context.Tests on a.TestId equals t.Id into testGroup
from t in testGroup.DefaultIfEmpty()

join u in _context.Users on a.StudentId equals u.Id into userGroup
from u in userGroup.DefaultIfEmpty()

join p in _context.PersonalInformations on u.Id equals p.UserId into personalGroup
from p in personalGroup.DefaultIfEmpty()
    select new AllAssessmentDto
    {
        AssessmentTitle  = t != null ? t.Title      : "N/A",
        FullName = p != null ? p.FirstName  : "N/A",
        DifficultyLevel  = t != null ? t.Difficulty : "N/A",
        Status           = a.Status.ToString()
    }
).ToListAsync();

        // Add SR NO manually
        for (int i = 0; i < data.Count; i++)
        {
            data[i].SrNo = i + 1;
        }

        return data;
    }


    public async Task<List<TestDto>> GetTestsAsync()
{
    return await _context.Tests
        .Select(t => new TestDto
        {
            Id = t.Id,
            Title = t.Title,
            Duration = (int?)t.Duration,
            Description = t.Description,   
            Difficulty = t.Difficulty     
        })
        .ToListAsync();
}

    public async Task<List<StudentDto>> GetStudentsAsync()
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

    public async Task AssignAssessmentAsync(AssignAssessmentDto dto)
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