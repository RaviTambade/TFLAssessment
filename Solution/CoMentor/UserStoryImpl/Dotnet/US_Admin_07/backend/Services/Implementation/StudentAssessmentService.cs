public class StudentAssessmentService : IStudentAssessmentService
{
    private readonly IStudentAssessmentRepository _repository;

    public StudentAssessmentService(IStudentAssessmentRepository repository)
    {
        _repository = repository;
    }


    public List<StudentAssessmentDto> GetAllAssessments()
{
    return _repository.GetFullData(); // use new method
}
}