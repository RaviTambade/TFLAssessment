namespace Transflower.TFLAssessment.Entities;

public class CreateTestRequest
{
    public int SubjectId { get; set; }
    public string Duration { get; set; } 
    public int SubjectExpertId { get; set; }
    public DateTime CreationDate { get; set; }
    public DateTime ModificationDate { get; set; }
    public DateTime ScheduledDate { get; set; }
    public int PassingLevel { get; set; }
}
