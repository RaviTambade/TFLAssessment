
using Assessment.Entities;

namespace Assessment.Repositories.Interfaces;
public interface IResultManager{
   
    public int GetCandidateScore(int candidateId, int testId);
    public int GetCandidateTestScore(int candidateId, int testId);
    //public List<CandidateResult> GetAllCandidatesTestScore( int testId);

    public CandidateResultDetails CandidateTestResultDetails(int candidateId, int testId);
}