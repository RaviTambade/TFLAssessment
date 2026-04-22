namespace backend.Repositories.Interfaces
{
    public interface ICreateTestRepository
    {
        Task<List<QuestionDto>> GetQuestionsByConceptId(List<long> conceptIds, string type);
        Task<long> CreateTest(CreateTestRequestDto dto);
    }
}