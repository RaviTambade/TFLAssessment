using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IAssessmentIntelligenceRepository{

        public Task<List<AnnualCandidateResult>> GetCandidateResults(int candidateId, int year);
}

