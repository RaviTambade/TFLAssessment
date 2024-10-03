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
    }
}
