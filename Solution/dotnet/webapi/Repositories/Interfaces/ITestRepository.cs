namespace backend.Repositories.Interfaces
{
    public interface ICreateTestRepository
    {
        Task<List<QuestionDto>> GetQuestionsByConceptIdAsync(List<long> conceptIds, string type, string difficulty);
        Task<long> CreateTestAsync(CreateTestRequestDto dto);
    }
}