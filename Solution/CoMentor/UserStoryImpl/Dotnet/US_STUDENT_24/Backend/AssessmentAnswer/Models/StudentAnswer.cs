namespace AssessmentAnswer.Data;

public class StudentAnswer
{
    public int Id { get; set; }
    public int StudentId { get; set; }
    public int AssessmentId { get; set; }
    public int QuestionId { get; set; }
    public string? SelectedOption { get; set; }
    public int? TimeTakenMinutes { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}