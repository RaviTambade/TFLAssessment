namespace Transflower.TFLAssessment.Entities;
public class CandidateAnswerResult
{
    public int TestQuestionId { get; set; }
    public string CandidateAnswer { get; set; }
    public string CorrectAnswer { get; set; }
    public bool IsCorrect { get; set; }
}
