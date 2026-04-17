namespace backend.Dtos;

public class StudentDto
{
    public long Id { get; set; }
    public string Name { get; set; } = string.Empty;
}

public class AssessmentSummaryDto
{
    public long AssessmentId { get; set; }
    public string AssessmentTitle { get; set; } = string.Empty;
    public StudentDto Student { get; set; } = new();
    public string Status { get; set; } = string.Empty;
    public float Score { get; set; }
    public float Percentile { get; set; }
    public long TimeTakenMinutes { get; set; }
    public int TotalQuestions { get; set; }
    public int CorrectAnswers { get; set; }
    public int WrongAnswers { get; set; }
}
