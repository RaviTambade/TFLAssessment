using EvaluationCriteriaEntities;

namespace EvaluationCriteriaInterfaces;

public interface  IEvaluationCriteriaService
{
    public bool UpdateSubject(int id, int subjectId);

    public bool InsertCriteria(EvaluationCriteria criteria);

    public bool UpdateCriteria(int evaluationCriteriaId, int questionId);

}
