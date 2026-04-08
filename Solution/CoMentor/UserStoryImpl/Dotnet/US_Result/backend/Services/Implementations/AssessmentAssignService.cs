public class AssessmentAssignService : IAssessmentAssignService
{
    private readonly IAssessmentAssignRepository _repository;

    public AssessmentAssignService(IAssessmentAssignRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<TestDto>> GetTests()
    {
        return await _repository.GetTests();
    }

    public async Task<List<StudentDto>> GetStudents()
    {
        return await _repository.GetStudents();
    }

    public async Task CreateAssessment(CreateAssessmentDto dto)
    {
        await _repository.CreateAssessment(dto);
    }

    
}