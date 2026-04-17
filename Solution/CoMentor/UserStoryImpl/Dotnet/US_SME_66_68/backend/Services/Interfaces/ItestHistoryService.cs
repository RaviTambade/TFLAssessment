using Backend.Dtos;


namespace Backend.Services.Interface{
    public interface ITestHistoryServices
    {
        Task<IEnumerable<TestHistoryDto>> GetAllTestHistoryAsync();
        Task<TestDetailsDto?> GetTestDetailsByIdAsync(int id);
    }
}