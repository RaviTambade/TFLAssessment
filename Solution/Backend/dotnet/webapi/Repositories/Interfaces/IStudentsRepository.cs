using backend.DTO.Responses;

namespace backend.Repositories.Interfaces
{
    public interface IStudentsRepository
    {
        Task<StudentCounts> GetTotalStudents();

        Task<List<StudentResponse>> GetAllStudents();
    }
}