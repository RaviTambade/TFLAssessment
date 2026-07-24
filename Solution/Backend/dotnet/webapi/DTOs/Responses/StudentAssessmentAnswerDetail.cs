namespace backend.DTO.Responses;

public class StudentAssessmentAnswerDetail
{
    public int QuestionId { get; set; }
    public string QuestionDescription { get; set; } = string.Empty;
    public string? OptionA { get; set; }
    public string? OptionB { get; set; }
    public string? OptionC { get; set; }
    public string? OptionD { get; set; }
    public string? CorrectAnswer { get; set; }
    public string? SelectedOption { get; set; }

    public bool IsCorrect => string.Equals(SelectedOption, CorrectAnswer, System.StringComparison.OrdinalIgnoreCase);
}
