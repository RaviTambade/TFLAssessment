namespace Assessment_result.Models;
public class AssessmentQuestion
{
    public int QuestionId { get; set; }
    public int AssessmentId { get; set; }

    public string Description { get; set; }

    public string OptionA { get; set; }
    public string OptionB { get; set; }
    public string OptionC { get; set; }
    public string OptionD { get; set; }

    public string CorrectAnswer { get; set; }
}