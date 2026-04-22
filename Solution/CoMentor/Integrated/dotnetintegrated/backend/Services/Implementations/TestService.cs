

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

        public Task<List<QuestionDto>> GetQuestionsByConceptId(List<long> conceptIds, string type)
            => _repo.GetQuestionsByConceptId(conceptIds, type);

        public Task<long> CreateTest(CreateTestRequestDto dto)
            => _repo.CreateTest(dto);
    }
}