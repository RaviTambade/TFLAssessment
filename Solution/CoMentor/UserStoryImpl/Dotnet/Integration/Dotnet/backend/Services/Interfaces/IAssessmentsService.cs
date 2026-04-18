using System.Collections.Generic;
using System.Threading.Tasks;

using backend.DTOs;
namespace backend.Services.Interfaces;
public interface IAssessmentsService
{
    Task<List<UpcomingAssessmentDto>> GetAllUpcomingAssessmentsService(long userId);
    Task<List<AllAssessmentDto>> GetAssessments();
    
    Task<List<TestDto>> GetTestsAsync();
    Task<List<StudentDto>> GetStudentsAsync();
    Task AssignAssessmentAsync(AssignAssessmentDto dto);
    Task<List<AssessmentResultDto>> GetAssessmentResults();
}

