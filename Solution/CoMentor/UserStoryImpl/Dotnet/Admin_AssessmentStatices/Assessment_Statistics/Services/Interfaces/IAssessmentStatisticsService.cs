using System.Collections.Generic;
using System.Threading.Tasks;

public interface IAssessmentStatisticsService
{
    Task<List<AssessmentStatsDto>> GetAssessmentStatistics();
}