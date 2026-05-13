// id, candidateid, testid, scheduledstart, scheduledend, status
namespace Transflower.TFLAssessment.Entities;
public class TestEmployeeDetails
{
    public int Id { get; set; }
    public int assessmentid { get; set; }
    public string TestName { get; set; }
    public string PassingLevel { get; set; }    
    // Use TimeSpan for MySQL TIME type
    public TimeSpan? Duration { get; set; }
    public DateTime? ScheduledStart { get; set; }
    public DateTime? ScheduledEnd { get; set; }
    public string Status { get; set; }
}