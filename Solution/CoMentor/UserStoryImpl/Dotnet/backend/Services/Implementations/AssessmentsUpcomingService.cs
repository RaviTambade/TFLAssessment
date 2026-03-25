public class AssessmentsUpcomingService : IAssessmentsUpcomingService
{
    private readonly IAssessmentUpcomingRepository _repository;

    public AssessmentsUpcomingService(IAssessmentUpcomingRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<AssessmentUpcomingDto>> GetAllUpcomingAssessmentsService(long userId)
    {
        return await _repository.GetAllUpcomingAssessments(userId); // Replace 0 with actual user ID if available
    }
}