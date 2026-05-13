using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace  Transflower.TFLAssessment.Services;

public class ResultService : IResultService
{
    private readonly IResultRepository _repository;

    public ResultService()
    {

    }
    public ResultService(IResultRepository repository)
    {
        _repository = repository;
    }

    public async Task<int> GetCandidateScore(int candidateId, int testId)
    {
        return await _repository.GetCandidateScore(candidateId, testId);
    }

    public async Task<bool> SetCandidateTestStartTime(int candidateId, int testId, TestTime time)
    {
        return await _repository.SetCandidateTestStartTime(candidateId, testId, time);
    }

    public async Task<bool> SetCandidateTestEndTime(int candidateId, int assessmentid, TestTime time)
    {
        return await _repository.SetCandidateTestEndTime(candidateId, assessmentid, time);
    }

    public async Task<CandidateResultDetails> CandidateTestResultDetails(int candidateId, int testId)
    {
        return await _repository.CandidateTestResultDetails(candidateId, testId);
    }

    public async Task<List<TestResultDetails>> GetTestResultDetail(int assessmentid)
    {
        return await _repository.GetTestResultDetail(assessmentid);
    }

    public async Task<List<AppearedCandidate>> GetAppearedCandidates(int assessmentId)
    {
        return await _repository.GetAppearedCandidates(assessmentId);
    }

    public async Task<List<PassedCandidateDetails>> GetPassedCandidateResults(int assessmentId)
    {
        return await _repository.GetPassedCandidateResults(assessmentId);
    }

    public async Task<List<FailedCandidateDetails>> GetFailedCandidateResults(int assessmentId)
    {
        return await _repository.GetFailedCandidateResults(assessmentId);
    }

    public async Task<bool> SetPassingLevel(int testId, int passingLevel)
    {
        return await _repository.SetPassingLevel(testId, passingLevel);
    }

    public async Task<List<CandidateSubjectResults>> GetSubjectResultDetails(int subjectId)
    {
        return await _repository.GetSubjectResultDetails(subjectId);
    }

    public async Task<List<TestList>> GetTestList(int candidateId)
    {
        return await _repository.GetTestList(candidateId);
    }

    public async Task<List<Subject>> GeAllSubjects()
    {
        return await _repository.GeAllSubjects();
    }

    public async Task<List<TestAverageReport>> GetTestAverageReport(int testId)
    {
        return await _repository.GetTestAverageReport(testId);
    }
    public async Task<List<TestScoreDto>> GetCandidateAllScore(int candidateId)
    {
        return await _repository.GetCandidateAllScore(candidateId);
    }
}