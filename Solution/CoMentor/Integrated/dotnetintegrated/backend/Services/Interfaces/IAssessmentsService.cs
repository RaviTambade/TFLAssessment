using System.Collections.Generic;
using System.Threading.Tasks;

using backend.DTOs;
namespace backend.Services.Interfaces;

public interface IAssessmentsService
{
    Task<List<UpcomingAssessmentDto>> GetAllUpcomingAssessmentsService(long userId ,DateTime fromDate, DateTime toDate);
    Task<List<AllAssessmentDto>> GetAssessments();
     Task<bool> DeactivateAssessment(long id);
     Task<bool> RestoreAssessment(long id);
    Task<List<TestDto>> GetTestsAsync();
    Task<List<StudentDto>> GetStudentsAsync();
    Task AssignAssessmentAsync(AssignAssessmentDto dto);
    // Task<List<AssessmentResultDto>> GetAssessmentResults();
    Task<List<AssessmentQuestionDto>> GetAssessmentQuestions(int assessmentId);
    Task<bool> SaveAssessmentAnswersAsync(AssessmentAnswersDto submission);
    Task<AssessmentReportDto> GetResultData(AssessmentstudenttResultDto request);

    Task<int> GetTotalAssessmentsAsync();
    Task<int> GetCompletedAssessmentsAsync();

    Task<List<AllAssessmentDto>> GetAllAssessments();

    Task<List<AssessmentSummaryDto>> GetAssessmentSummariesForStudent(long studentId);
}

