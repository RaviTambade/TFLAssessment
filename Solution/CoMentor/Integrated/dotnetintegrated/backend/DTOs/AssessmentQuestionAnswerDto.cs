namespace backend.DTOs;
public class AssessmentQuestionAnswersDto
{
    public int StudentId { get; set; }
    public int AssessmentId { get; set; }
    public int TimeTakenMinutes { get; set; }
     public int QuestionId { get; set; }
     public string SelectedOption { get; set; }
   
}
