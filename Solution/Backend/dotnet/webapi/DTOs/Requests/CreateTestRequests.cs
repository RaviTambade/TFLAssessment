namespace backend.DTO.Requests;

public class CreateTestRequests
{
    public long UserRolesId { get; set; }
    public long SmeId { get; set; }
    public string? Title { get; set; }
    public long Duration { get; set; }
    public string? SkillLevel { get; set; }
    public List<long>? QuestionIds { get; set; }
    public string? Description { get; set; }

}