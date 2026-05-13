namespace backend.DTOs;
public class AssessmentReportDto
{
    public int StudentId { get; set; }
    public int AssessmentId { get; set; }
    public int Score { get; set; }
    public int Percentage { get; set; }

    public string? TestTitle { get; set; }       // ✅ must match SP column name
    public int TotalQuestions { get; set; }
    public int CorrectAnswers { get; set; }
    public int WrongAnswers { get; set; }
    public double ScorePercentage { get; set; } // ✅ must match SP column name
}