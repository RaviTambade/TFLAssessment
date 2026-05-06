namespace backend.Models;

public class PasswordEntry
{
    public string Password { get; set; }
    public DateTime ExpiryTime { get; set; }
}