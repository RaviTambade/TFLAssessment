namespace backend.DTO.Responses;
public class AllAssessments
{
    public long Id { get; set; }
    public int SrNo { get; set; }
    public string? AssessmentTitle { get; set; }
    public string? FullName { get; set; }
    public string? DifficultyLevel { get; set; }
    public string? Status { get; set; }
    public bool IsActive { get; set; }
}
