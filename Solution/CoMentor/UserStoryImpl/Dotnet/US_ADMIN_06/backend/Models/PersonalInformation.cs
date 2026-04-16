namespace backend.Models;

public class PersonalInformation
{
       public long Id { get; set; }   // ✅ PRIMARY KEY
    public long? UserId { get; set; }
    public string? FullName { get; set; }
}
