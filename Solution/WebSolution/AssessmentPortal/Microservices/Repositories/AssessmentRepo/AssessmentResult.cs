namespace AssessmentRepo.Entities;
public class AssessmentResult
{
    public int TestId { get; set; }
    public int CandidateId { get; set; }
    public int CorrectAnswers { get; set; }
    public int IncorrectAnswers { get; set; }
    public int SkippedQuestions { get; set; }
}