
using Assessment.Entities;

namespace Assessment.Repositories.Interfaces;
public interface IEvaluationCriteriaManager{

    public string GetCriteria(string subject, int questionId);
    public bool InsertCriteria(NewCriteria criteria);
    public List<EvaluationCriteria> GetEvalutionCriteriasBySubject(int subjectId);
    public bool UpdateCriteria(int evaluationCriteriaId, int questionId);
    public List<EvaluationCriteria> GetEvalutionCriterias();

}