
using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories.Interfaces;
public interface IResultRepository
{
   
    public int GetCandidateScore(int candidateId, int testId);
    public int GetCandidateTestScore(int candidateId, int testId);
    // public List<CandidateResult> GetAllCandidatesTestScore( int testId);

    public CandidateResultDetails CandidateTestResultDetails(int candidateId, int testId);
}