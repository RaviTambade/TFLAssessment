
using Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Interfaces;

public interface ICandidateAnswerRepository
{
    public Task<bool> InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers);

}
