using Backend.Dtos;
using Backend.Repositories.Interfaces;
using Backend.Services.Interface;



namespace Backend.Services.Implementation
{
    public class TestHistoryService : ITestHistoryServices
    {
        private readonly ITestHistoryRepository _testHistoryRepository;

        public TestHistoryService(ITestHistoryRepository testHistoryRepository)
        {
            _testHistoryRepository = testHistoryRepository;
        }

        public async Task<IEnumerable<TestHistoryDto>> GetAllTestHistoryAsync()
        {
            return await _testHistoryRepository.GetAllTestHistoryAsync();
        }

        public async Task<TestDetailsDto?> GetTestDetailsByIdAsync(int id)
        {
            return await _testHistoryRepository.GetTestDetailsByIdAsync(id);
        }
    }
}