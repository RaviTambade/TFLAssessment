using System.Collections.Generic;
using System.Threading.Tasks;

public interface IAssessmentUpcomingRepository
{
    Task<List<AssessmentUpcomingDto>> GetAllUpcomingAssessments(long userId);
}