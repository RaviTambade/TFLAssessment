public interface IAssessmentStatusService
{
    Task<List<AssessmentStatusDto>> GetAssessmentsByStatusAsync(string status);
}