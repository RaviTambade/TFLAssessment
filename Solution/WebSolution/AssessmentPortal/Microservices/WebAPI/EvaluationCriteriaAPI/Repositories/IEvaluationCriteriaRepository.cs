
using Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Entities;
namespace Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Repositories.Interfaces;

public interface IEvaluationCriteriaRepository

{
    public Task <bool> UpdateSubject(int id, int subjectId);

    public Task <bool> InsertCriteria(EvaluationCriteria criteria);

    public Task <bool> UpdateCriteria(int evaluationCriteriaId, int questionId);

}