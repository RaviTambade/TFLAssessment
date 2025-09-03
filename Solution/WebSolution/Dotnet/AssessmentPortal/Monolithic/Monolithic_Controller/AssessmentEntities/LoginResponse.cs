namespace Transflower.TFLAssessment.Entities;

public class LoginResponse
{
    public string Token { get; set; }
    // public UserDTO User { get; set; }
    public User User { get; set; }
}
