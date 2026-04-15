
using AssessmentQuestions.DTOs;
public class AssessmentQuestionService : IAssessmentQuestionService
{
    private readonly IAssessmentQuestionRepository _repository;

    public AssessmentQuestionService(IAssessmentQuestionRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<AssessmentQuestionDto>> GetAssessmentQuestions(int assessmentId)
    {
       
        var questions = await _repository.GetAssessmentQuestions(assessmentId);
        
        return questions;
    }
}