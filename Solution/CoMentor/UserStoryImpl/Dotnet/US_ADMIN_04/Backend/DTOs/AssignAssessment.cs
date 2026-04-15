public class AssignAssessmentDto
{
    public long TestId { get; set; }
    public long StudentId { get; set; }
    public DateTime ScheduledAt { get; set; }

    public DateTime AssignedAt { get; set; }

    public string? Status { get; set; }
}