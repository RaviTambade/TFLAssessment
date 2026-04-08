using backend.Models;


public class ResultService : IResultService
{
    private readonly IResultRepository _repository;

    public ResultService(IResultRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<AssessmentResultDto>> GetAssessmentResults()
    {
        return await _repository.GetAssessmentResults();
    }
}