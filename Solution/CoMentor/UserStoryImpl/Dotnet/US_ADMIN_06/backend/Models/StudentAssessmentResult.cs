public class StudentAssessmentResult
{
  public long Id { get; set; }
    public long? StudentId { get; set; }
    public long? AssessmentId { get; set; }
    public float? Score { get; set; }
    public float? Percentile { get; set; }
    public long? TimeTakenMinutes { get; set; }
}