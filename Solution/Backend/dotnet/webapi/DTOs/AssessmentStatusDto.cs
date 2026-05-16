
namespace backend.DTOs.Responses;
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