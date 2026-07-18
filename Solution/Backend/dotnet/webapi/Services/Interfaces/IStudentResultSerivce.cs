
using backend.DTO.Requests;
using backend.DTO.Responses;

namespace backend.Services.Interfaces;


public interface IStudentResultService
{
    Task<List<StudentResults>> GetStudentResultsAsync();

    Task<StudentAnswersResults> GetStudentAnswerResultAsync(int questionId, int studentId, int assessmentId);
    Task<bool> SaveStudentAssessmentResult(StudentAssessmentResultRequest result);

}