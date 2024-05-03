namespace Transflower.Assessment.WebAPI.ResultAPI.Entities;
public class CandidateResultDetails
{

    public int CandidateId { get; set; }

    public int TestId { get; set; }
    
    public int CorrectAnswers { get; set; }

    public int IncorrectAnswers { get; set; }

    public int SkippedQuestions { get; set; }



}