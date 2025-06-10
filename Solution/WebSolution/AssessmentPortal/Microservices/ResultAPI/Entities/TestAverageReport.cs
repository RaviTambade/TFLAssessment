namespace Transflower.TFLAssessment.Entities;

public class TestAverageReport
{
    public int Id { get; set; }
    public string SubjectName { get; set; }
    public string EvalutionCriteria { get; set; }
    public double TotalQuestionsAnswered { get; set; }
    public int CorrecrAnswers { get; set; }
    public int PercentageCorrect { get; set; }
}