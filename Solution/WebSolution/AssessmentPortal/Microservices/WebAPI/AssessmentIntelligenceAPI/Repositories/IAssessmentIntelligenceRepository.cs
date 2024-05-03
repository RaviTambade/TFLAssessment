using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Entities;

namespace Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Repositories.Interfaces;

public interface IAssessmentIntelligenceRepository{

        public Task<List<AnnualCandidateResult>> GetCandidateResults(int candidateId, int year);
}
