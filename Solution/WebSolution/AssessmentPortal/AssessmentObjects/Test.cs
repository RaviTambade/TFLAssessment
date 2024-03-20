namespace Assessment.Entities;

public class Test
{
    public int Id {get;set;}
    public int SubjectId {get;set;}
    public TimeOnly Duration{get;set;}
    public int SmeId {get;set;}
    public DateTime CreationDate {get;set;}
    public DateTime ModificationDate {get;set;}
    public DateTime ScheduledDate {get;set;}

    public string SkillTitle{get; set;}

    public string FirstName{get; set;}

    public string LastName{get; set;}
}
