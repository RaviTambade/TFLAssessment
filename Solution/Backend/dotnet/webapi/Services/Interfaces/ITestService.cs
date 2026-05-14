using backend.DTO.Requests;
using backend.DTO.Responses;

namespace backend.Services.Interfaces
{
    public interface ICreateTestService
    {
        Task<List<Questions>> GetQuestionsByConceptAsync(string concept);
        Task<long> CreateTestAsync(CreateTestRequests dto);
        Task<bool> CancelTestAsync(int id);
        
    }
}