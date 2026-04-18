namespace backend.DTOs;
public class UpcomingAssessmentDto
{
    public long SrNo { get; set; }
    public string? AssessmentName { get; set; }
    
    public DateTime? ScheduledAt { get; set; }

    public int? Duration { get; set; }
    public string? Status { get; set; }


}


