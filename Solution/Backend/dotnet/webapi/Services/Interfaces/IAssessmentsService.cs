using System.Collections.Generic;
using System.Threading.Tasks;

using backend.DTO.Responses;
using backend.DTO.Requests;
namespace backend.Services.Interfaces;

public interface IAssessmentsService
{
    Task<List<Assessments>> GetAllUpcomingAssessmentsService(long userId ,DateTime fromDate, DateTime toDate);
    Task<List<AllAssessments>> GetAssessments();
     Task<bool> DeactivateAssessment(long id);
     Task<int> CancelAssessmentsByTestId(long testId);
     Task<bool> RestoreAssessment(long id);
    Task<List<Tests>> GetTestsAsync();
    // Task<List<Student>> GetStudentsAsync();

    Task<List<Student>> GetStudentsAsync();
    Task AssignAssessmentAsync(AssignAssessments dto);
    // Task<List<AssessmentResultDto>> GetAssessmentResults();
    Task<List<AssessmentQuestions>> GetAssessmentQuestionsAsync(int assessmentId);
    Task<bool> SaveAssessmentAnswersAsync(AssessmentAnswers submission);
    Task<AssessmentReports> GetResultData(AssessmentstudentsResults request);

    Task<int> GetTotalAssessmentsAsync();
    Task<int> GetCompletedAssessmentsAsync();

    Task<List<AllAssessments>> GetAllAssessments();

    Task<List<AssessmentSummaries>> GetAssessmentSummariesForStudent(long studentId);
     Task<List<AssessmentPerformanceResponse>> GetAssessmentPerformance(long userId);

    Task<List<CompletedAssessmentsResponse>> GetCompletedAssessments(int studentId);
}

