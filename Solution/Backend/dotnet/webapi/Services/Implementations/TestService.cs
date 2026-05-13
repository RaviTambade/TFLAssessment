

using backend.DTOs;
using backend.Repositories.Interfaces;

namespace backend.Services
{
    public class CreateTestService : Interfaces.ICreateTestService
    {
        private readonly ICreateTestRepository _repo;

        public CreateTestService(ICreateTestRepository repo)
        {
            _repo = repo;
        }

        public Task<List<QuestionsDto>> GetQuestionsByConceptAsync(string concept)
             => _repo.GetQuestionsByConceptAsync(concept);

        public Task<long> CreateTestAsync(CreateTestRequestDto dto)
            => _repo.CreateTestAsync(dto);

            
        public async Task<bool> CancelTestAsync(int id)
        {
            return await _repo.CancelTestAsync(id);
        }
    }
}