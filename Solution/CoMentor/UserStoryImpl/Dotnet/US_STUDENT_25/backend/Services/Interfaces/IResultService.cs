public interface IResultService
{
    Task<List<AssessmentResultDto>> GetAssessmentResults();
}