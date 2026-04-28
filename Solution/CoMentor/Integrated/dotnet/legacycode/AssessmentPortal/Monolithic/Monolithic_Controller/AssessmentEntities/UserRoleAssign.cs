namespace Transflower.TFLAssessment.Entities;

public class UserRoleAssign
{
    public int Id { get; set; }
    public string AadharId { get; set; }
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public string Email { get; set; }
    public string ContactNumber { get; set; }
    public List<Role> Roles { get; set; } = new();
}
