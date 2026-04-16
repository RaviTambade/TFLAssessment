namespace backend.Services.Interfaces;

public interface IQuestionTypeService
{
    Task<List<string>> GetQuestionTypesAsync();
}