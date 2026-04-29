namespace backend.Repositories.Interfaces
{
    public interface ICreateTestRepository
    {
        Task<List<QuestionDto>> GetQuestionsByConceptIdAsync(List<long> conceptIds, string type);
        Task<long> CreateTestAsync(CreateTestRequestDto dto);
    }
}