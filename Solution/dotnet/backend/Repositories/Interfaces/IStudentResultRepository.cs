using backend.DTOs;

namespace backend.Repositories.Interfaces
{
    public interface IStudentResultRepository
    {
        Task<List<StudentResultDto>> GetStudentResultsAsync();
    }
}