namespace Transflower.TFLAssessment.Entities;
public class UserSession
{
    public long Id { get; set; }
    public long UserId { get; set; }
    public DateTime LoginTime { get; set; }
    public DateTime? LogoutTime { get; set; }
    public string SessionStatus { get; set; }
}
