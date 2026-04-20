using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Assessment_result.Data; 

namespace Assessment_result.Repositories;

public class AssessmentResultRepository : IAssessmentResultRepository
{
    private readonly AssessmentResultDbContext _context;

    public AssessmentResultRepository(AssessmentResultDbContext context)
    {
        _context = context;
    }

    public async Task<AssessmentReportDto> GetResultData(int studentId, int assessmentId)
{
    var results = await _context.StudentAssessmentReports
    .FromSqlInterpolated($"CALL GetStudentAssessmentReport({studentId}, {assessmentId})")
    .ToListAsync(); // Execution happens here

// 2. Now pick the first item from the list in C#
var report = results.FirstOrDefault();
return report;

}
}