public class UserSessionResponseDto
{
    public long SessionId { get; set; }
    public long UserId { get; set; }
    public DateTime LoginTime { get; set; }
    public DateTime? LogoutTime { get; set; }
    public bool Session_status { get; set; }
}