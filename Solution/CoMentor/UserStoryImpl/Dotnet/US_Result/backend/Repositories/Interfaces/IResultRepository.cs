public interface IResultRepository
{
    Task<List<AssessmentResultDto>> GetAssessmentResults();
}