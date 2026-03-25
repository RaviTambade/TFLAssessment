using Microsoft.EntityFrameworkCore;
// where DbContext is generated

public class AssessmentStatisticsRepository : IAssessmentStatisticsRepository
{
    private readonly TflDbContext _context;

    public AssessmentStatisticsRepository(TflDbContext context)
    {
        _context = context;
    }

    public async Task<List<AssessmentStatsDto>> GetAssessmentStatistics()
    {
        var result = await _context.AssessmentStats
            .FromSqlRaw(@"
                SELECT 
                    t.id AS AssessmentId,
                    t.title AS AssessmentName,

                    COUNT(sar.id) AS TotalStudents,

                    MAX(sar.score) AS HighestScore,
                    MIN(sar.score) AS LowestScore,
                    AVG(sar.score) AS AverageScore,

                    (SUM(CASE WHEN sar.score >= 40 THEN 1 ELSE 0 END) * 100.0 / COUNT(sar.id)) AS PassPercentage

                FROM student_assessment_results sar
                JOIN tests t ON sar.assessment_id = t.id
                GROUP BY t.id, t.title
            ")
            .Select(x => new AssessmentStatsDto
            {
                AssessmentId = x.AssessmentId,
                AssessmentName = x.AssessmentName,
                TotalStudents = x.TotalStudents,
                AverageScore = x.AverageScore,
                HighestScore = x.HighestScore,
                LowestScore = x.LowestScore,
                PassPercentage = x.PassPercentage
            })
            .ToListAsync();

        return result;
    }
}