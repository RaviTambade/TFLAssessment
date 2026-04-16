
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;

namespace backend.Services.Implementations;
public class QuestionTypeService : IQuestionTypeService
{
    private readonly IQuestionTypeRepository _repository;

    public QuestionTypeService(IQuestionTypeRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<string>> GetQuestionTypesAsync()
    {
        return await _repository.GetQuestionTypesAsync();
    }
}