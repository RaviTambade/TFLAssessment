namespace Transflower.TFLAssessment.Entities;

public class SubjectQuestionCount
{
    public int QuestionCount { get; set; }
    public Subject subject { get; set; }=new();
}
