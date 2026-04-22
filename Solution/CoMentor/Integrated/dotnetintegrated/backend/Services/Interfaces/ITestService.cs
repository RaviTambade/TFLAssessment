namespace backend.Services.Interfaces
{
    public interface ICreateTestService
    {
        Task<List<QuestionDto>> GetQuestionsByConceptId(List<long> conceptIds, string type);
        Task<long> CreateTest(CreateTestRequestDto dto);
    }
}