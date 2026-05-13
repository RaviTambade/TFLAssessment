namespace Transflower.TFLAssessment.Entities;

public class UserDTO
{
    public int Id { get; set; }
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public string Email { get; set; }
    public List<string> Roles { get; set; }
}
