namespace backend.DTO.Responses;
public class Assessments
{
    public long SrNo { get; set; }
    public string? AssessmentName { get; set; }
    public int AssessmentId { get; set; }
    
    public DateTime? ScheduledAt { get; set; }

    public int? Duration { get; set; }
    public string? Status { get; set; }


}


