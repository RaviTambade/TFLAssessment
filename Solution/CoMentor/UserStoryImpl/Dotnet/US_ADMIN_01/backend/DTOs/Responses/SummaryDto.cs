namespace US_Admin_01.DTOs.Responses
{

public class SummaryDto
{
    public int TotalStudents { get; set; }
    public int TotalAssessments { get; set; }
    public int CompletedAssessments { get; set; }
    public int PendingAssessments { get; set; }
    public int AssignedAssessments { get; set; }
}
}