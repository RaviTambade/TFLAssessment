namespace backend.DTO.Requests;

public class AssignAssessments
{
    public long TestId { get; set; }

    public List<long> StudentIds { get; set; }  

    public DateTime ScheduledAt { get; set; }

    public long AssignedBy {get; set;}

    public DateTime AssignedAt { get; set; }

    public string? Status { get; set; }
}




