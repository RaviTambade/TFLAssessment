using backend.DTO.Requests;
using backend.DTO.Responses;
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

        public Task<List<Questions>> GetQuestionsByConceptAsync(string concept)
             => _repo.GetQuestionsByConceptAsync(concept);

        public Task<long> CreateTestAsync(CreateTestRequests dto)
            => _repo.CreateTestAsync(dto);

            
        public async Task<bool> CancelTestAsync(int id)
        {
            return await _repo.CancelTestAsync(id);
        }
    }
}