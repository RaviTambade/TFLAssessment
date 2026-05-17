<<<<<<<< HEAD:Solution/Backend/dotnet/webapi/DTOs/Requests/Assessment.cs
namespace backend.DTOs.Requests;
public class Assessment
========
namespace backend.DTO.Responses;
public class Assessments
>>>>>>>> 4f21b725b3cfd340571ff9ab604530eb58f17606:Solution/Backend/dotnet/webapi/DTOs/Responces/Assessments.cs
{
    public long SrNo { get; set; }
    public string? AssessmentName { get; set; }
    public int AssessmentId { get; set; }
    
    public DateTime? ScheduledAt { get; set; }

    public int? Duration { get; set; }
    public string? Status { get; set; }
}


