using backend.DTOs;

namespace backend.Repositories.Interfaces
{
    public interface ICreateTestRepository
    {
        public Task<List<QuestionsDto>> GetQuestionsByConceptAsync(string concept);
        Task<long> CreateTestAsync(CreateTestRequestDto dto);
         Task<bool> CancelTestAsync(int id);
    }
}