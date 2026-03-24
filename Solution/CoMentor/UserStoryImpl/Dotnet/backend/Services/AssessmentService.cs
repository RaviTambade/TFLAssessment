public class AssessmentService : IAssessmentService
{
    private readonly IAssessmentRepository _repository;

    public AssessmentService(IAssessmentRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<AssessmentDto>> GetAssessments()
    {
        return await _repository.GetAllAssessments();
    }
}