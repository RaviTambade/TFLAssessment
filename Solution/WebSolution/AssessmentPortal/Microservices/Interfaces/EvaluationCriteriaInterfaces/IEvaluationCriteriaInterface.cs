using EvaluationCriteriaEntities;

namespace EvaluationCriteriaInterfaces;

public interface  IEvaluationCriteriaService
{
    public bool UpdateCriteria(int evaluationCriteriaId, int questionId);

    public bool InsertCriteria(EvaluationCriteria criteria);

}
