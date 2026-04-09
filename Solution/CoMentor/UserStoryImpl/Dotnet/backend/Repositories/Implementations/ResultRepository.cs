using Microsoft.EntityFrameworkCore;
using backend.Models;
public class ResultRepository : IResultRepository
{
    private readonly AppDbContext _context;

    public ResultRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<AssessmentResultDto>> GetAssessmentResults()
    {
       var result = await (
    from a in _context.Assessments

    join sar in _context.StudentAssessmentResults
        on new { Id = (long?)a.Id } equals new { Id = (long?)sar.AssessmentId } into sarGroup
    from sar in sarGroup.DefaultIfEmpty()

    join u in _context.Users
        on new { Id = (long?)a.StudentId } equals new { Id = (long?)u.Id } into userGroup
    from u in userGroup.DefaultIfEmpty()

    join pi in _context.PersonalInformations
        on u.Id equals pi.UserId into piGroup
    from pi in piGroup.DefaultIfEmpty()

    join t in _context.Tests
        on a.TestId equals t.Id into testGroup
    from t in testGroup.DefaultIfEmpty()

    select new AssessmentResultDto
    {
        FullName = pi != null ? pi.FullName : null,
        TestTitle = t != null ? t.Title : null,
        Difficulty = t != null ? t.Difficulty : null,
        Score = sar != null ? sar.Score : 0,
        Percentile = sar != null ? sar.Percentile : 0,
        ScheduledDate = a.ScheduledAt
    }
).ToListAsync();
        return result;
    }
}