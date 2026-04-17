namespace AssessmentQuestions.DTOs
{
public class AssessmentQuestionDto
{
    public int QuestionId { get; set; }
    public string? Description { get; set; }
    public string ?QuestionType { get; set; }

    public string? OptionA { get; set; }
    public string? OptionB { get; set; }
    public string? OptionC { get; set; }
    public string? OptionD { get; set; }

}
}