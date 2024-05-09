using Transflower.AssessmentIntelligenceAPI.Entities;
using Transflower.AssessmentIntelligenceAPI.Repositories.Interfaces;
using Transflower.AssessmentIntelligenceAPI.Services.Interfaces;

namespace Transflower.AssessmentIntelligenceAPI.Services{
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

