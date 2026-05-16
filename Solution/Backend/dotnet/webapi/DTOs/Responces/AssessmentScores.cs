<<<<<<<< HEAD:Solution/Backend/dotnet/webapi/DTOs/AssessmentScore.cs
namesapce namespace backend.DTOs.Responses;
public class AssessmentScore
========
namespace backend.DTO.Responses;

public class AssessmentScores
>>>>>>>> 4f21b725b3cfd340571ff9ab604530eb58f17606:Solution/Backend/dotnet/webapi/DTOs/Responces/AssessmentScores.cs
{
    public long TestId { get; set; }
    public string TestTitle { get; set; }
    public int StudentId { get; set; }
    public int CorrectAnswers { get; set; }
    public int WrongAnswers { get; set; }
    public int TotalQuestions { get; set; }
    public decimal ScorePercentage { get; set; }
}