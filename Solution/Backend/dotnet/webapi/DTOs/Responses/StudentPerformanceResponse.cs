namespace backend.DTO.Responses;

public class StudentPerformanceResponse
{
    public int StudentId { get; set; }

    public int TotalCompletedAssessments { get; set; }

    public decimal AverageScore { get; set; }
}