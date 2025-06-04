using Transflower.TFLAssessment.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Transflower.TFLAssessment.Repositories.Interfaces
{
    public interface ICandidateAnswerRepository
    {
        Task<bool> InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers);
        Task<List<CandidateAnswer>> GetCandidateAnswers(int candidateId, int testId);
    }
}
