using Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;
public interface IEvaluationCriteriaRepository
{

    public Task<string> GetCriteria(string subject, int questionId);
    public Task <List<EvaluationCriteria>> GetEvalutionCriterias();
    public Task<List<EvaluationCriteria>> GetEvalutionCriteriasBySubject(int subjectId);
    public Task<bool> InsertCriteria(NewCriteria criteria);
    public Task<bool> UpdateCriteria(int evaluationCriteriaId, int questionId);
    public Task<List<QuestionDetails>> GetQuestionsBySubjectAndCriteria(int subjectId, int criteriaId);


}