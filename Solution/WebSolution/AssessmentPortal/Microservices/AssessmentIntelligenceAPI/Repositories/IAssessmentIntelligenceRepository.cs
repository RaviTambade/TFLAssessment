using Transflower.AssessmentIntelligenceAPI.Entities;

namespace Transflower.AssessmentIntelligenceAPI.Repositories.Interfaces;

public interface IAssessmentIntelligenceRepository{

        public Task<List<AnnualCandidateResult>> GetCandidateResults(int candidateId, int year);
}
