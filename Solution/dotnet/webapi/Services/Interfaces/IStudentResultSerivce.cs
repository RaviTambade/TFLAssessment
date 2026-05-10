
using backend.DTOs;

public interface IStudentResultService
{
    Task<List<StudentResultDto>> GetStudentResultsAsync();

    Task<StudentAnswersResultDto> GetStudentAnswerResultAsync(int questionId, int studentId, int assessmentId);

}