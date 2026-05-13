using backend.DTOs;

namespace backend.Services.Interfaces
{
    public interface ICreateTestService
    {
        Task<List<QuestionsDto>> GetQuestionsByConceptAsync(string concept);
        Task<long> CreateTestAsync(CreateTestRequestDto dto);
        Task<bool> CancelTestAsync(int id);
        
    }
}