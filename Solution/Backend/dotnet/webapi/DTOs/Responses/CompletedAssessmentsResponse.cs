namespace backend.DTO.Responses;

public class CompletedAssessmentsResponse
{
    public int Id { get; set; }

    public int AssessmentId { get; set; }

    public string AssessmentName { get; set; }

    public int Score { get; set; }

    public double Percentage { get; set; }

    public int TimeTakenMinutes { get; set; }
}