namespace Transflower.TFLAssessment.Entities;

public class User
{
    public int Id { get; set; }
    public string AadharId { get; set; }
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public string Email { get; set; }
    public string ContactNumber { get; set; }
    public string Password { get; set; }
    public List<UserRole> UserRoles { get; set; } = new();
}
