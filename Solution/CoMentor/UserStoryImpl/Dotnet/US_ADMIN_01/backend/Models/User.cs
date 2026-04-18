using System.ComponentModel.DataAnnotations.Schema;
[Table("users")]
public class User
{
    [Column("id")]
    public int Id { get; set; }

    [Column("contact")]
    public string? Contact { get; set; }

    [Column("password")]
    public string? Password { get; set; }

    [Column("status")]
    public string? Status { get; set; }

    public ICollection<UserLog>? UserLogs { get; set; }
    public ICollection<UserRole>? UserRoles { get; set; }
    public ICollection<PersonalInformation>? PersonalInformations { get; set; }
}