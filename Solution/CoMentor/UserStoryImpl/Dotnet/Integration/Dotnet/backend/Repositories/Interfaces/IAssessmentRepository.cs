using System.Collections.Generic;
using System.Threading.Tasks;
using backend.DTOs;
namespace backend.Repositories.Interfaces;

public interface IAssessmentRepository
{
    Task<List<UpcomingAssessmentDto>> GetAllUpcomingAssessments(long userId);
    Task<List<AllAssessmentDto>> GetAllAssessments();
    Task<List<TestDto>> GetTestsAsync();
    Task<List<StudentDto>> GetStudentsAsync();
    Task AssignAssessmentAsync(AssignAssessmentDto dto);
}