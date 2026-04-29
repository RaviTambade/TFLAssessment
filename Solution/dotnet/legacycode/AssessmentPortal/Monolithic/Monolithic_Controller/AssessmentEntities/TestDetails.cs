// id, candidateid, testid, scheduledstart, scheduledend, status
namespace Transflower.TFLAssessment.Entities;

public class TestDetails
{
    public int Id { get; set; }
    public string TestName { get; set; }
    public string Subjectname { get; set; }
    // Use TimeSpan for MySQL TIME type
    public TimeSpan? Duration { get; set; }
    public DateTime? ScheduledStart { get; set; }
    public DateTime? ScheduledEnd { get; set; }
}