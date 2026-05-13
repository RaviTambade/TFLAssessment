namespace backend.DTOs;
public class AssessmentQuestionAnswersDto
{
    public int AssessmentId { get; set; }
    public int StudentId { get; set; }
    public int QuestionId { get; set; }
    public string OptionA { get; set; }
    public string OptionB { get; set; }
    public string OptionC { get; set; }
    public string OptionD { get; set; }
    public string CorrectAnswer { get; set; }
    public string StudentSelectedAnswer { get; set; }
    public string Result { get; set; }
   
}
