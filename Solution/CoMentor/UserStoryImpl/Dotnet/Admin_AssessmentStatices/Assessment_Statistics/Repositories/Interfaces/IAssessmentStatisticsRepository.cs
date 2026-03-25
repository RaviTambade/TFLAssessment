using System.Collections.Generic;
using System.Threading.Tasks;

public interface IAssessmentStatisticsRepository
{
    Task<List<AssessmentStatsDto>> GetAssessmentStatistics();
}