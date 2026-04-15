public class AssignAssessmentDto
{
    public long TestId { get; set; }

    public List<long> StudentIds { get; set; }  // ✅ changed

    public DateTime ScheduledAt { get; set; }

    public DateTime AssignedAt { get; set; }

    public string? Status { get; set; }
}