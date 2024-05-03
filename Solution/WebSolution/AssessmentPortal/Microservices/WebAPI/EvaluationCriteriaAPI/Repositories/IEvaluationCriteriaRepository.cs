
using Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Entities;
namespace Transflower.Assessment.WebAPI.EvaluationCriteriaAPI.Repositories.Interfaces;

public interface IEvaluationCriteriaRepository

{
    public bool UpdateSubject(int id, int subjectId);

    public bool InsertCriteria(EvaluationCriteria criteria);

    public bool UpdateCriteria(int evaluationCriteriaId, int questionId);

}