namespace Assessment_result.DTOs;
public class AssessmentResultResponseDto
{
    public int StudentId { get; set; }
    public int AssessmentId { get; set; }
      public int Score { get; set; }
    public int TotalQuestions { get; set; }      
    public int CorrectAnswers { get; set; }    
    public int WrongAnswers { get; set; }
    public double? Percentage { get; set; }
     

    public List<AssessmentQuestionResultDto> Details { get; set; }
}