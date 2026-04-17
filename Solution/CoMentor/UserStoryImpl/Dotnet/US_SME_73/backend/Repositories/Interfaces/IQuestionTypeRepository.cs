namespace backend.Repositories.Interfaces;

public interface IQuestionTypeRepository
{
    Task<List<string>> GetQuestionTypesAsync();
}