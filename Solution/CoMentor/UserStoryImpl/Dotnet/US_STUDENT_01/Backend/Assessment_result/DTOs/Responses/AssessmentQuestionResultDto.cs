namespace Assessment_result.DTOs;
public class AssessmentQuestionResultDto
{
    public int QuestionId { get; set; }
    public string Description { get; set; }

    public string OptionA { get; set; }
    public string OptionB { get; set; }
    public string OptionC { get; set; }
    public string OptionD { get; set; }

    public string CorrectAnswer { get; set; }
     public string SelectedOption { get; set; }
      public bool IsCorrect { get; set; }
 
}
