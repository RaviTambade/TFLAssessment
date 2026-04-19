namespace Assessment_result.Models;

public class AssessmentAnswer
{
    public int Id { get; set; }

    public int StudentId { get; set; }
    public int AssessmentId { get; set; }
    public int QuestionId { get; set; }
    public string SelectedOption { get; set; }
    public DateOnly CreatedAt{get;set;}
    public TimeOnly TimeTakenMinutes{get;set;}
}