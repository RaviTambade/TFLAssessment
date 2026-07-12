namespace backend.DTO.Requests;

public class StudentAssessmentResultRequest
{
    public int Id { get; set; }

    public int StudentId { get; set; }

    public int AssessmentId { get; set; }

    public double Score { get; set; }

    public double Percentile { get; set; }

    public int TimeTakenMinutes { get; set; }
}