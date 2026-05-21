using AssessmentIntelligenceEntities;

namespace AssessmentIntelligenceInterfaces;

public interface IAssessmentIntelligenceService
{
    public List<AnnualCandidateResult> GetCandidateResults(int candidateId, int year);

}
