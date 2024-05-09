using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;

namespace Transflower.TFLAssessment.Services.Implementations;

//Providers
public class EvaluationCriteriaService : IEvaluationCriteriaService
{
    private readonly IEvaluationCriteriaRepository _repository;

    public EvaluationCriteriaService(IEvaluationCriteriaRepository repository)
    {
        _repository = repository;

    }
    public List<EvaluationCriteria> GetEvalutionCriterias()
    {
        return _repository.GetEvalutionCriterias;

    }

    public List<EvaluationCriteria> GetEvalutionCriteriasBySubject(int subjectId)
    {
        return _repository.GetEvalutionCriteriasBySubject(subjectId);
    }

    public string GetCriteria(string subject, int questionId)
    {
        return _repository.GetCriteria(subject, questionId);
    }

    public bool InsertCriteria(NewCriteria criteria)
    {
        return _repository.InsertCriteria(criteria);
    }

    public bool UpdateCriteria(int evaluationCriteriaId, int questionId)
    {
        return _repository.UpdateCriteria(evaluationCriteriaId, questionId);
    }
}
