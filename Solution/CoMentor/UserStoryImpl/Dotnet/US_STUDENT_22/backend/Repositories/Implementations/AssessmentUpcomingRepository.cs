using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

public class AssessmentUpcomingRepository : IAssessmentUpcomingRepository
{
    private readonly AppDbContext _context;
     public AssessmentUpcomingRepository(AppDbContext context)
    {
        _context = context;
    }
[HttpGet]
public async Task<List<AssessmentUpcomingDto>> GetAllUpcomingAssessments(long userId)
{
    var data = 
    await (
        from a in _context.Assessments  join t in _context.Tests on a.TestId equals t.Id into at from t in at.DefaultIfEmpty()
        join s in _context.PersonalInformations on a.StudentId equals s.UserId into st from s in st.DefaultIfEmpty()
        join c in _context.PersonalInformations on a.AssignedBy equals c.UserId into ct from c in ct.DefaultIfEmpty()
        join ur in _context.UserRoles on a.StudentId equals ur.UserId into urt from ur in urt.DefaultIfEmpty()
        join r in _context.Roles on ur.RoleId equals r.RoleId into rt from r in rt 
        .Where(x => x.RoleName.ToLower() == "student")
        .DefaultIfEmpty()
        where a.StudentId == userId && (a.Status.ToString() == "Assigned")
        orderby a.ScheduledAt ascending

        select new AssessmentUpcomingDto
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
}