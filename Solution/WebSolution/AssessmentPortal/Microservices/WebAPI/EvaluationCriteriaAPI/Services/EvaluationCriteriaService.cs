using Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Entities;
using Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Services.Interfaces;
using Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Repositories.Interfaces;

namespace Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Services
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
