namespace backend.DTO.Responses;

public class StudentAssessments
{
    public long AssessmentId { get; set; }
    public long TestId { get; set; }
    public string? TestTitle { get; set; }
    public long StudentId { get; set; }
    public string? StudentName { get; set; }
    public string? Status { get; set; }
    public DateTime? AssignedAt { get; set; }
    public DateTime? ScheduledAt { get; set; }

    public Results? Result { get; set; }
}

public class Results
{
    public double Score { get; set; }
    public double Percentile { get; set; }
    public int? TimeTakenMinutes { get; set; }
}