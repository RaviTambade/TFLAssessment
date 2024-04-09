using EvaluationCriteriaEntities;

namespace EvaluationCriteriaInterfaces;

public interface  IEvaluationCriteriaService
{
    public bool UpdateCriteria(int evaluationCriteriaId, int questionId);

}
