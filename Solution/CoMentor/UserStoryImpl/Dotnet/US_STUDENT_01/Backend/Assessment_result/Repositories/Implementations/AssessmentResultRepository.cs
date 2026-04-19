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
    return await _context.Set<AssessmentReportDto>()
        .FromSqlRaw("CALL sp_GetAssessmentResult({0}, {1})", studentId, assessmentId)
        .AsNoTracking()
        .FirstOrDefaultAsync();
}
}