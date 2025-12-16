using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Services.Interfaces;

namespace Transflower.TFLAssessment.Services{
public class AssessmentIntelligenceService:IAssessmentIntelligenceService
{
    private readonly IAssessmentIntelligenceRepository _repo;

    public AssessmentIntelligenceService(IAssessmentIntelligenceRepository repository){
        _repo=repository;
    }

    public async Task<List<AnnualCandidateResult>> GetCandidateResults(int candidateId, int year){
        return await _repo.GetCandidateResults(candidateId, year);
    }

    
}
}

