namespace Transflower.TFLAssessment.Entities;

public class CriteriaQuestionCount
{
    public int QuestionCount { get; set; }
    public EvaluationCriteria Criteria { get; set; } = new();
}
