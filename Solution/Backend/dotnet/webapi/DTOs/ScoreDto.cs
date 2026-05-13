
namespace backend.DTOs;
public class AverageScoreDto
{
    public int StudentId { get; set; }
    public int TotalCompletedAssessments { get; set; }
    public double AvgScore { get; set; }
}