namespace backend.DTOs;
public class AssessmentAnswersDto
{ 

    public int Id {get;set ;}
     public int StudentId { get; set; }
    public int AssessmentId { get; set; }
    public int TimeTakenMinutes { get; set; }

    // This list holds every answer the student selected
    public List<QuestionAnswerDto>? Answers { get; set; }
}