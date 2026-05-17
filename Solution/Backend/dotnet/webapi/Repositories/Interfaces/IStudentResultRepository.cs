using backend.DTO.Responses;

namespace backend.Repositories.Interfaces
{
    public interface IStudentResultRepository
    {
        Task<List<StudentResults>> GetStudentResultsAsync();
    
       Task<StudentAnswersResults> GetStudentAnswerResultAsync(int questionId, int studentId, int assessmentId);
}
}