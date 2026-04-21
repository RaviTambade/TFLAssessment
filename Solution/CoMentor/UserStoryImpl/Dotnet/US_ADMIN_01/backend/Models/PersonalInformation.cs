using System.ComponentModel.DataAnnotations.Schema;
[Table("personal_informations")]
public class PersonalInformation
{   
    [Column("id")]
    public int Id { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [Column("first_name")]
    public string? FirstName { get; set; }

    [Column("last_name")]
    public string? LastName { get; set; }

    [Column("full_name")]
    public string? FullName { get; set; }

    public User? User { get; set; }
}