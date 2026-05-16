using backend.DTO.Responses;

namespace backend.DTO.Requests;
public class AssessmentAnswers
{ 

    public int Id {get;set ;}
     public int StudentId { get; set; }
    public int AssessmentId { get; set; }
    public int TimeTakenMinutes { get; set; }

    // This list holds every answer the student selected
    public List<QuestionAnswers>? Answers { get; set; }
}