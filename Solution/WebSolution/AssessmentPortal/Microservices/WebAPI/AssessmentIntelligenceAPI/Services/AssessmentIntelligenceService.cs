using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Entities;
using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Repositories.Interfaces;
using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Services.Interfaces;

namespace Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Services{
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

