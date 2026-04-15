using AssessmentQuestions.DTOs;

public interface IAssessmentQuestionService
{
   Task<List<AssessmentQuestionDto>> GetAssessmentQuestions(int assessmentId);
}