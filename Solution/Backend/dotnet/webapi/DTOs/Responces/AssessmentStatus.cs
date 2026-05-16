<<<<<<< HEAD:Solution/Backend/dotnet/webapi/DTOs/AssessmentStatusDto.cs

namespace backend.DTOs.Responses;
=======
namespace backend.DTO.Responses;

>>>>>>> 4f21b725b3cfd340571ff9ab604530eb58f17606:Solution/Backend/dotnet/webapi/DTOs/Responces/AssessmentStatus.cs
public class AssessmentStatus
{
    public int Id { get; set; }
    public int TestId { get; set; }
    public int StudentId { get; set; }
    public DateTime ScheduledAt { get; set; }
    public string Status { get; set; }
    public string TestTitle { get; set; }
    public string StudentName { get; set; }
}