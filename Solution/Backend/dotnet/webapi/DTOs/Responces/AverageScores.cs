namespace backend.DTO.Responses;
public class AverageScores
{
    public int StudentId { get; set; }
    public int TotalCompletedAssessments { get; set; }
    public double AvgScore { get; set; }
}