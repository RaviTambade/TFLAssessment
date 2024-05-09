using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Repositories.Interfaces;

namespace Transflower.TFLAssessment.Services
{
    public class EvaluationCriteriaService : IEvaluationCriteriaService
    {
        private readonly IEvaluationCriteriaRepository _repository;
        
        public EvaluationCriteriaService(IEvaluationCriteriaRepository repository)
        {
            _repository = repository;
        }

        public async Task<bool> UpdateSubject(int id, int subjectId)
        {
            return await _repository.UpdateSubject(id, subjectId);
        }

        public async Task<bool> InsertCriteria(EvaluationCriteria criteria)
        {
            return await _repository.InsertCriteria(criteria);
        }

        public async Task<bool> UpdateCriteria(int evaluationCriteriaId, int questionId)
        {
            return await _repository.UpdateCriteria(evaluationCriteriaId, questionId);
        }
    }
}
