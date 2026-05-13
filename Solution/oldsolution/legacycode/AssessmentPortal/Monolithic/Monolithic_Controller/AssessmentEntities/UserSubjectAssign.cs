namespace Transflower.TFLAssessment.Entities;

public class UserSubjectAssign
{
    public int Id { get; set; }
    public int UserId{get;set;}
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public string Email { get; set; }
    public string ContactNumber { get; set; }
    public List<Subject> Subjects { get; set; } = new();
}
