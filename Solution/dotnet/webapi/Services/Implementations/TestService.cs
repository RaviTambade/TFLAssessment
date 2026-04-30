

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

        public Task<List<QuestionDto>> GetQuestionsByConceptIdAsync(List<long> conceptIds, string type, string difficulty)
             => _repo.GetQuestionsByConceptIdAsync(conceptIds, type, difficulty);

        public Task<long> CreateTestAsync(CreateTestRequestDto dto)
            => _repo.CreateTestAsync(dto);
    }
}