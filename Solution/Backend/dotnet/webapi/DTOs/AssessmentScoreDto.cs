public class AssessmentScoreDto
{
    public long TestId { get; set; }
    public string TestTitle { get; set; }
    public int StudentId { get; set; }
    public int CorrectAnswers { get; set; }
    public int WrongAnswers { get; set; }
    public int TotalQuestions { get; set; }
    public decimal ScorePercentage { get; set; }
}