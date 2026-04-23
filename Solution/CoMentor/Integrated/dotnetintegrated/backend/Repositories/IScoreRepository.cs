using backend.DTOs;
using System.Threading.Tasks;

namespace backend.Repositories.Interfaces
{
    public interface IScoreRepository
    {
        Task<AverageScoreDto> GetAverageScoreByIdAsync(int studentId);
        Task<List<AverageScoreDto>> GetAllStudentsAverageScoreAsync();
    }
}