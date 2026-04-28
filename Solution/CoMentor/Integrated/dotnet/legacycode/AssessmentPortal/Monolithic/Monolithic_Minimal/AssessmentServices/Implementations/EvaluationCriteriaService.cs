using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Services.Implementations;

//Providers
public class EvaluationCriteriaService : IEvaluationCriteriaService
{
    private readonly IEvaluationCriteriaRepository _repository;

    public EvaluationCriteriaService(IEvaluationCriteriaRepository repository)
    {
        _repository = repository;

    }
    public async Task<List<EvaluationCriteria>> GetEvalutionCriterias()
    {
        return await _repository.GetEvalutionCriterias();

    }

    public async Task<List<EvaluationCriteria>> GetEvalutionCriteriasBySubject(int subjectId)
    {
        return await _repository.GetEvalutionCriteriasBySubject(subjectId);
    }

    public async Task<string> GetCriteria(string subject, int questionId)
    {
        return await _repository.GetCriteria(subject, questionId);
    }

    public async Task<bool> InsertCriteria(NewCriteria criteria)
    {
        return await _repository.InsertCriteria(criteria);
    }

    public async Task<bool> UpdateCriteria(int evaluationCriteriaId, int questionId)
    {
        return await _repository.UpdateCriteria(evaluationCriteriaId, questionId);
    }

    public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId)
    {
        return await _repository.GetQuestionsBySubjectAndCriteria(subjectId, criteriaId);
    }
}
