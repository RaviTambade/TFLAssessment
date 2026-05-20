using backend.DTO.Requests;
using backend.DTO.Responses;

namespace backend.Services.Interfaces
{
    public interface ICreateTestService
    {
        Task<List<TestQuestions>> GetQuestionsBySMEAsync(long userId);
        Task<long> CreateTestAsync(CreateTestRequests dto);
        Task<bool> CancelTestAsync(int id);
        
    }
}
