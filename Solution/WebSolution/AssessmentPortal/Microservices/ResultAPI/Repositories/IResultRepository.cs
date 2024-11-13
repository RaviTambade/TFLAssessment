using Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IResultRepository{

    public Task<int> GetCandidateScore(int candidateId, int testId);
    
   //public Task<int> GetCandidateTestScore(int candidateId, int testId);

    public Task<bool> SetCandidateTestStartTime(int candidateId, int testId, TestTime time);

    public Task<bool> SetCandidateTestEndTime(int candidateId, int testId, TestTime time);

    public Task<CandidateResultDetails> CandidateTestResultDetails(int candidateId, int testId);

    public Task<List<TestResultDetails>> GetTestResultDetails(int testId);
    public Task<List<AppearedCandidate>> GetAppearedCandidates(int testId);
    public Task<List<TestResultDetails>> GetTestList(int candidateId);


    public Task<List<PassedCandidateDetails>> GetPassedCandidateResults(int testId);
    public Task<List<FailedCandidateDetails>> GetFailedCandidateResults(int testId);

    public Task<bool> SetPassingLevel (int testId,int passingLevel);

    public Task<List<CandidateSubjectResults>> GetSubjectResultDetails(int subjectId);

    //public Task<int[]> GetAllTestIds();
    public Task<List<Subject>> GeAllSubjects();

    
}