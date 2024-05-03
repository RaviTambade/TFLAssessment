
using Transflower.Assessment.WebAPI.CandidateAnswerAPI.Entities;
namespace Transflower.Assessment.WebAPI.CandidateAnswerAPI.Repositories.Interfaces;

public interface ICandidateAnswerRepository
{
    public Task<bool> InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers);

}
