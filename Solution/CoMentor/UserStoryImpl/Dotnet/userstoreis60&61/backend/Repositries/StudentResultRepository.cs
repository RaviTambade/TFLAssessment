using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.DTO;

public class StudentResultRepository
{
    private readonly AppDbContext _context;

    public StudentResultRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<StudentResultDto>> GetResults()
    {
        var result = await _context.StudentResultDtos   // ✅ FIXED
            .FromSqlRaw(@"
    SELECT 
        CONCAT(p.first_name, ' ', p.last_name) AS student_name,
        r.runtime_name AS subject,
        t.title AS assessment_title,
        sar.percentile AS percentile,
        CASE 
            WHEN sar.percentile > 60 THEN 'PASS'
            ELSE 'FAIL'
        END AS result_status
    FROM student_assessment_results sar
    JOIN assessments a ON sar.assessment_id = a.id
    JOIN tests t ON a.test_id = t.id
    JOIN users u ON sar.student_id = u.id
    JOIN personal_informations p ON u.id = p.user_id
    JOIN sme_runtimes sr ON t.sme_runtime_id = sr.sme_runtime_id
    JOIN runtimes r ON sr.runtime_id = r.id")
            .ToListAsync();

        return result;
    }
}