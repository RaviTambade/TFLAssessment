using backend.DTOs;
using System.Threading.Tasks;

namespace backend.Repositories.Interfaces
{
    public interface IStudentsRepository
    {
        Task<StudentCountDto> GetTotalStudents();
    }
}