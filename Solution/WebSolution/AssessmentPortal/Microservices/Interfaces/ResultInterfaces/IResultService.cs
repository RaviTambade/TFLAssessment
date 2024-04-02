using ResultEntity;
namespace ResultInterfaces;

public interface IResultService{
   
   public int GetCandidateScore(int candidateId, int testId);
    public int GetCandidateTestScore(int candidateId, int testId);
    public CandidateResultDetails CandidateTestResultDetails(int candidateId, int testId);
}