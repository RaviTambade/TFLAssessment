

using Backend.Dtos;

namespace Backend.Repositories.Interfaces
{
    public interface ITestHistoryRepository
    {
        Task<IEnumerable<TestHistoryDto>> GetAllTestHistoryAsync();
        Task<TestDetailsDto?> GetTestDetailsByIdAsync(int id);
    }
}