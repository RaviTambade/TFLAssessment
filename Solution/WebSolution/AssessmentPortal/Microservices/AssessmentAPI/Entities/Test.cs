namespace Transflower.TFLAssessment.Entities;
public class Test
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int SubjectId { get; set; }
    public int? SubjectMatterExpertId { get; set; }  // Nullable foreign key
    public Subject Subject { get; set; }
    public SubjectMatterExpert SubjectMatterExpert { get; set; }  // Navigation property

    // Other properties
    public TimeSpan Duration { get; set; }
    public DateTime CreationDate { get; set; }
    public DateTime? ModificationDate { get; set; }
    public DateTime ScheduledDate { get; set; }
    public int PassingLevel { get; set; }
    public string Status { get; set; } // Or Enum depending on how you're using it
}

