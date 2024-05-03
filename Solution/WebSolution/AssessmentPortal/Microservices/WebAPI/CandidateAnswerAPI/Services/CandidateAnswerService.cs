using Transflower.Assessment.WebAPI.CandidateAnswerAPI.Entities;
using Transflower.Assessment.WebAPI.CandidateAnswerAPI.Services.Interfaces;
using Transflower.Assessment.WebAPI.CandidateAnswerAPI.Repositories.Interfaces;
namespace Transflower.Assessment.WebAPI.CandidateAnswerAPI.Services;


public class CandidateAnswerService : ICandidateAnswerService
{
    private readonly ICandidateAnswerRepository _repository;
    public CandidateAnswerService(ICandidateAnswerRepository repository)
    {
        _repository = repository;
    }
    public Task<bool> InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers)
    {
      return _repository.InsertCandidateAnswers(candidateId,answers);
    }
}