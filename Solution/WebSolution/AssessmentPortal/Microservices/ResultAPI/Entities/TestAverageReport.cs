namespace Transflower.TFLAssessment.Entities;

public class TestAverageReport
{
    // public int Id { get; set; }
    public string SubjectName { get; set; }
    public string EvalutionCriteria { get; set; }
    public int TotalQuestionsAnswered { get; set; }
    public int CorrectAnswers { get; set; }
    public double PercentageCorrect { get; set; }
}