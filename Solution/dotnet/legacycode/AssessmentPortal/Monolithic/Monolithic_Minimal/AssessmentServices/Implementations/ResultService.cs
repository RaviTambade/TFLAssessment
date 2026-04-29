using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Services.Interfaces;
namespace Transflower.TFLAssessment.Services.Implementations;

//Providers
public class ResultService :IResultService
{ 
     private readonly IResultRepository _repository;

    public ResultService(IResultRepository repository)
    {
        _repository = repository;

    }

        public int GetCandidateScore(int candidateId, int testId)
    { 
        return _repository.GetCandidateScore(candidateId,testId);
    }
    public int GetCandidateTestScore(int candidateId, int testId)
    {
        return _repository.GetCandidateTestScore(candidateId,testId);
    }
    public CandidateResultDetails CandidateTestResultDetails(int candidateId, int testId)
    {
        return _repository.CandidateTestResultDetails(candidateId,testId);
    }

}
