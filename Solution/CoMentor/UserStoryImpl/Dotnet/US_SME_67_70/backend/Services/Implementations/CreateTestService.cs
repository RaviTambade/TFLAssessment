
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

        public Task<List<RuntimeDto>> GetRuntimes()
            => _repo.GetRuntimes();

        public Task<List<LanguageDto>> GetLanguages(long runtimeId)
            => _repo.GetLanguages(runtimeId);

        public Task<List<LayerDto>> GetLayers(long languageId)
            => _repo.GetLayers(languageId);

        public Task<List<ConceptDto>> GetConcepts(List<long> frameworkIds)
            => _repo.GetConcepts(frameworkIds);

        public Task<List<QuestionDto>> GetQuestions(List<long> conceptIds, string type)
            => _repo.GetQuestions(conceptIds, type);

        public Task<long> CreateTest(CreateTestRequestDto dto)
            => _repo.CreateTest(dto);
    }
}