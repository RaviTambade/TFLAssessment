public class StudentAssessmentRepository : IStudentAssessmentRepository
{
    private readonly AppDbContext _context;

    public StudentAssessmentRepository(AppDbContext context)
    {
        _context = context;
    }

   

    // ✅ NEW METHOD (ADD THIS)
    public List<StudentAssessmentDto> GetFullData()
{
    var data = (from a in _context.Assessments

                join t in _context.Tests on a.TestId equals t.Id
                join u in _context.Users on a.StudentId equals u.Id
                join p in _context.PersonalInformations on u.Id equals p.UserId

                join r in _context.StudentAssessmentResults
                    on a.Id equals r.AssessmentId into resultGroup
                from r in resultGroup.DefaultIfEmpty()

                select new StudentAssessmentDto
                {
                    AssessmentId = a.Id,
                    TestId = t.Id,
                    TestTitle = t.Title,

                    StudentId = u.Id,
                    StudentName = p.FullName, // ✅ FIXED

                    Status = a.Status,
                    AssignedAt = a.AssignedAt,
                    ScheduledAt = a.ScheduledAt,

                    Result = r == null ? null : new ResultDto
                    {
                        Score = r.Score,
                        Percentile = r.Percentile,
                        TimeTakenMinutes = r.TimeTakenMinutes
                    }
                }).ToList();

    return data;
}

}