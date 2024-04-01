
using Assessment.Entities;

namespace Assessment.Repositories.Interfaces;
public interface IEvaluationCriteriaManager{

    string GetCriteria(string subject, int questionId);
    List<EvaluationCriteria> GetEvalutionCriterias();
    List<EvaluationCriteria> GetEvalutionCriteriasBySubject(int subjectId);
    bool InsertCriteria(NewCriteria criteria);
    bool UpdateCriteria(int evaluationCriteriaId, int questionId);
    List<QuestionDetails> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId);
    

}