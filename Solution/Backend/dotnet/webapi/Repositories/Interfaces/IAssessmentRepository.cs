using System.Collections.Generic;
using System.Threading.Tasks;
using backend.DTO.Responses;
using backend.DTO.Requests;
using backend.Models;
namespace backend.Repositories.Interfaces
{

    public interface IAssessmentRepository
    {
        Task<List<Assessments>> GetAllUpcomingAssessments(long userId , DateTime fromDate, DateTime toDate);
        Task<List<AllAssessments>> GetAllAssessments();

        Task<List<Tests>> GetTestsAsync();
        Task<List<Student>> GetStudentsAsync();
        Task AssignAssessmentAsync(AssignAssessments dto);

        // Task<List<AssessmentResultDto>> GetAssessmentResults();
        Task<List<AssessmentQuestions>> GetAssessmentQuestionsAsync(int assessmentId);
        Task<bool> SaveAssessmentAnswersAsync(List<StudentAnswer>? answers);
        Task<AssessmentReports> GetResultData(int studentId, int assessmentId);
        Task<int> GetTotalAssessmentsAsync();
        Task<int> GetCompletedAssessmentsAsync();
        Task<bool> DeactivateAssessment(long id);
        Task<int> CancelAssessmentsByTestId(long testId);
        Task<bool> RestoreAssessment(long id);

        Task<List<AssessmentSummaries>> GetAssessmentSummariesForStudent(long studentId);
        List<StudentAssessments> GetFullData();


    }
}
