using backend.DTOs;
using System.Threading.Tasks;

namespace backend.Services.Interfaces
{
    public interface IStudentsService
    {
        Task<StudentCountDto> GetTotalStudents();
    }
}