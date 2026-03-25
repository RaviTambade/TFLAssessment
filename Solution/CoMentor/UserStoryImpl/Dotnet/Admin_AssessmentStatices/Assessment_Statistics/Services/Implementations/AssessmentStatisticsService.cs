using System.Collections.Generic;
using System.Threading.Tasks;

public class AssessmentStatisticsService : IAssessmentStatisticsService
{
    private readonly IAssessmentStatisticsRepository _repository;

    public AssessmentStatisticsService(IAssessmentStatisticsRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<AssessmentStatsDto>> GetAssessmentStatistics()
    {
        return await _repository.GetAssessmentStatistics();
    }
}