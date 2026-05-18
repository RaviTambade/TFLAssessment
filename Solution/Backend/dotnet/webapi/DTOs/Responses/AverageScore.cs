namespace backend.DTOs.Responses;

public class AverageScore
{
    public int StudentId { get; set; }
    public int TotalCompletedAssessments { get; set; }
    public double AvgScore { get; set; }
}