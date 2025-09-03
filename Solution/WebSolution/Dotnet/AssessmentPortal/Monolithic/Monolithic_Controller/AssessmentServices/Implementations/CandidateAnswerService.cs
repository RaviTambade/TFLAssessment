using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Repositories.Interfaces;

namespace Transflower.TFLAssessment.Services
{
    public class CandidateAnswerService : ICandidateAnswerService
    {
        private readonly ICandidateAnswerRepository _repository;

        public CandidateAnswerService(ICandidateAnswerRepository repository)
        {
            _repository = repository;
        }

        public Task<bool> InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers)
        {
            return _repository.InsertCandidateAnswers(candidateId, answers);
        }
        public Task<List<CandidateAnswer>> GetCandidateAnswers(int candidateId, int testId)
        {
            return _repository.GetCandidateAnswers(candidateId, testId);
        }
        public Task<List<CandidateAnswerResult>> GetCandidateAnswerResultsAsync(int candidateId, int testId)
        {
            return _repository.GetCandidateAnswerResultsAsync(candidateId, testId);
        }

        public Task<CandidateTestDetails> GetCandidateTestDetails(int candidateId, int testId)
        {
            return _repository.GetCandidateTestDetails(candidateId, testId);
        }
    }
}
