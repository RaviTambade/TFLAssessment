using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Repositories.Interfaces;


namespace backend.Services.Interfaces
{
    public interface IStudentsService
    {
        Task<StudentCounts> GetTotalStudents();
    }
}