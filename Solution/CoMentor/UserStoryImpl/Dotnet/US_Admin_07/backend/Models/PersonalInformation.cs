using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("personal_informations")]
public class PersonalInformation
{
    [Key]
    [Column("id")]
    public long Id { get; set; }

    [Column("user_id")]
    public long? UserId { get; set; }

    [Column("first_name")]
    public string FirstName { get; set; }

    [Column("last_name")]
    public string LastName { get; set; }

    // ✅ Generated column in DB
    [Column("full_name")]
    public string FullName { get; set; }

    [Column("gender")]
    public string Gender { get; set; }

    [Column("date_of_birth")]
    public DateTime? DateOfBirth { get; set; }

    [Column("email")]
    public string Email { get; set; }

    [Column("address")]
    public string Address { get; set; }

    [Column("pincode")]
    public string Pincode { get; set; }
}