public class AssessmentReportDto
{
    public int StudentId { get; set; }
    public int AssessmentId { get; set; }

    public int Score { get; set; }
    public int TotalQuestions { get; set; }
    public int CorrectAnswers { get; set; }
    public int WrongAnswers { get; set; }

    public double Percentage { get; set; }
}