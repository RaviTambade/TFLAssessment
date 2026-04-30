using backend.DTOs;

namespace backend.Repositories.Interfaces
{
    public interface IStudentResultRepository
    {
        Task<List<StudentResultDto>> GetStudentResultsAsync();
    
       Task<StudentAnswersResultDto> GetStudentAnswerResultAsync(int questionId, int studentId, int assessmentId);
}
}