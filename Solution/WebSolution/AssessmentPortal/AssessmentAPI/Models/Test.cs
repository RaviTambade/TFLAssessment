namespace Entities;

public class Test
{
    public int Id {get;set;}
    public int SkillId {get;set;}
    public TimeOnly Duration{get;set;}
    public int SubjectExpertId {get;set;}
    public DateTime CreatedOn {get;set;}
    public DateTime ModifiedOn {get;set;}
    public DateTime ScheduledOn {get;set;}

    public string SkillTitle{get; set;}

    public string FirstName{get; set;}

    public string LastName{get; set;}
}
