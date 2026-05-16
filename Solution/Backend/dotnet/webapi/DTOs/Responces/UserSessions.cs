namespace backend.DTO.Responses
{
public class UserSessions
{
    public long Id { get; set; }              // user id
    public string? Name { get; set; }         // full name
    public string? LoginTime { get; set; }
    public string? LogoutTime { get; set; }
    public string? Status { get; set; }       // Active / Inactive
}
}