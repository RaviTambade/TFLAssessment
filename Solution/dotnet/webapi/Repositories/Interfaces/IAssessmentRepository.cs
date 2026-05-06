using System.Collections.Generic;
using System.Threading.Tasks;
using backend.DTOs;
using backend.Models;
namespace backend.Repositories.Interfaces
{

    public interface IAssessmentRepository
    {
        Task<List<UpcomingAssessmentDto>> GetAllUpcomingAssessments(long userId , DateTime fromDate, DateTime toDate);
        Task<List<AllAssessmentDto>> GetAllAssessments();

        Task<List<TestDto>> GetTestsAsync();
        Task<List<StudentDto>> GetStudentsAsync();
        Task AssignAssessmentAsync(AssignAssessmentDto dto);

        // Task<List<AssessmentResultDto>> GetAssessmentResults();
        Task<List<AssessmentQuestionDto>> GetAssessmentQuestionsAsync(int assessmentId);
        Task<bool> SaveAssessmentAnswersAsync(List<StudentAnswer>? answers);
        Task<AssessmentReportDto> GetResultData(int studentId, int assessmentId);
        Task<int> GetTotalAssessmentsAsync();
        Task<int> GetCompletedAssessmentsAsync();
        Task<bool> DeactivateAssessment(long id);
        Task<bool> RestoreAssessment(long id);

        Task<List<AssessmentSummaryDto>> GetAssessmentSummariesForStudent(long studentId);
        List<StudentAssessmentDto> GetFullData();


    }
}
