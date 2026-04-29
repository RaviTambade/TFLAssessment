using CandidateAnswerEntities;

namespace CandidateAnswerInterfaces;

public interface ICandidateAnswerService
{
    public bool InsertCandidateAnswers(int candidateId, List<CandidateAnswer> answers);

}
