namespace Transflower.TFLAssessment.Entities;
public class TestAssignmentRequest
{
    public int TestId { get; set; }
    public List<int> EmployeeIds { get; set; } = new List<int>();
    public DateTime ScheduledStart { get; set; }
    public DateTime ScheduledEnd { get; set; }
    public string Status { get; set; }
    public DateTime? RescheduledOn { get; set; }
    public string Remarks { get; set; }
}
