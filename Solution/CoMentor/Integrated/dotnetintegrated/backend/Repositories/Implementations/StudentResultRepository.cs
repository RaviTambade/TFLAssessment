using backend.DTOs;
using backend.Models;
using backend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Services.Interfaces;
using System;

namespace backend.Repositories.Implementations
{


public class StudentResultRepository : IStudentResultRepository
{
    private readonly AppDbContext _context;

    public StudentResultRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<StudentResultDto>> GetStudentResultsAsync()
{
//     var result = await (
//     from sar in _context.StudentAssessmentResults

//     join a in _context.Assessments
//         on (long?)sar.AssessmentId equals a.Id

//     join t in _context.Tests
//         on a.TestId equals t.Id

//     join u in _context.Users
//         on sar.StudentId equals u.Id

//     join p in _context.PersonalInformations
//         on u.Id equals p.UserId

//     join sr in _context.SmeRuntimes
//         on t.SmeId equals (long?)sr.SmeRuntimeId

//     join r in _context.Runtimes
//         on sr.RuntimeId equals r.Id

//     select new StudentResultDto
//     {
//         student_name = p.FirstName + " " + p.LastName,
//         subject = r.RuntimeName,
//         assessment_title = t.Title,
//         percentile = sar.Percentile,
//         result_status = sar.Percentile > 60 ? "PASS" : "FAIL"
//     }
// ).ToListAsync();
       var result = await (
    from sar in _context.StudentAssessmentResults

    join a in _context.Assessments
       on (long?)sar.AssessmentId equals a.Id

    join t in _context.Tests
        on a.TestId equals t.Id

    join u in _context.Users
        on sar.StudentId equals u.Id

    join p in _context.PersonalInformations
        on u.Id equals p.UserId

    // ✅ CORRECT JOIN (same as SQL)
    join sr in _context.SmeRuntimes
        on t.SmeRuntimeId equals sr.SmeRuntimeId

    join r in _context.Runtimes
        on sr.RuntimeId equals r.Id

    select new StudentResultDto
    {
        student_name = p.FirstName + " " + p.LastName,
        subject = r.RuntimeName,
        assessment_title = t.Title,
        percentile = sar.Percentile,
        result_status = sar.Percentile > 60 ? "PASS" : "FAIL"
    }
).ToListAsync();

    return result;
}
}
}