namespace backend.Services.Interfaces
{
    public interface ICreateTestService
    {
        Task<List<QuestionDto>> GetQuestionsByConceptIdAsync(List<long> conceptIds, string type, string difficulty);
        Task<long> CreateTestAsync(CreateTestRequestDto dto);

    }
}