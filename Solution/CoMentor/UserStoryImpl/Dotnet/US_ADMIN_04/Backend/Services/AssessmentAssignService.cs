public class AssessmentAssignService : IAssessmentAssignService
{
    private readonly IAssessmentAssignRepository _repository;

    public AssessmentAssignService(IAssessmentAssignRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<TestDto>> GetTestsAsync()
    {
        return await _repository.GetTestsAsync();
    }

    public async Task<List<StudentDto>> GetStudentsAsync()
    {
        return await _repository.GetStudentsAsync();
    }

    public async Task AssignAssessmentAsync(AssignAssessmentDto dto)
    {
        await _repository.AssignAssessmentAsync(dto);
    }

    
}