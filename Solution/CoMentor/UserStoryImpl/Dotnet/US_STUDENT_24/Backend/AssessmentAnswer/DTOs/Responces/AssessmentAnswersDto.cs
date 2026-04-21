using System.Collections.Generic;
using QuestionAnswer.DTOs;

namespace AssessmentAnswer.DTOs;

public class AssessmentAnswersDto
{
    public int StudentId { get; set; }
    public int AssessmentId { get; set; }
    public int TimeTakenMinutes { get; set; }

    // This list holds every answer the student selected
    public List<QuestionAnswerDto>? Answers { get; set; }
}
