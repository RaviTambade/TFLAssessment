namespace backend.Services.Interfaces
{
    public interface ICreateTestService
    {
        Task<List<QuestionDto>> GetQuestionsByConceptIdAsync(List<long> conceptIds, string type);
        Task<long> CreateTestAsync(CreateTestRequestDto dto);
    }
}