namespace backend.Services.Interfaces
{
    public interface ICreateTestService
    {
        Task<List<RuntimeDto>> GetRuntimes();
        Task<List<LanguageDto>> GetLanguages(long runtimeId);
        Task<List<LayerDto>> GetLayers(long languageId);
        Task<List<ConceptDto>> GetConcepts(List<long> frameworkIds);
        Task<List<QuestionDto>> GetQuestions(List<long> conceptIds, string type);
        Task<long> CreateTest(CreateTestRequestDto dto);
    }
}