public class AssessmentStatsDto
{
    public int AssessmentId { get; set; }

    public string AssessmentName { get; set; }

    public int TotalStudents { get; set; }

    public double AverageScore { get; set; }

    public double HighestScore { get; set; }

    public double LowestScore { get; set; }

    public double PassPercentage { get; set; }
}