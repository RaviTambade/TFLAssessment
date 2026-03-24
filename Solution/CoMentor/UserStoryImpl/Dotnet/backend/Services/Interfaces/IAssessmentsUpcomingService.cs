public interface IAssessmentsUpcomingService
{
    Task<List<AssessmentUpcomingDto>> GetAllUpcomingAssessmentsService(long userId);
}