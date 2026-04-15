namespace backend.Models
{
  public class StudentResult
{
    public long Id { get; set; }
    public long StudentId { get; set; }
    public long AssessmentId { get; set; }
    public float Score { get; set; }
    public float Percentile { get; set; }
    public int TimeTakenMinutes { get; set; }
}
}
