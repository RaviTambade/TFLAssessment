namespace Transflower.TFLAssessment.Entities;

public class ConceptQuestionCount
{
    public int QuestionCount { get; set; }
    public Concepts Concept { get; set; } = new();
}
