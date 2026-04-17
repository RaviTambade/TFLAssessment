using System.ComponentModel.DataAnnotations.Schema;

[Table("user_logs")]
public class UserLog
{

    [Column("id")]
    public long Id { get; set; }

    [Column("user_id")]          // ← MUST be here
    public int UserId { get; set; }

    [Column("login_time")]       // ← MUST be here
    public DateTime? LoginTime { get; set; }

    [Column("logout_time")]      // ← MUST be here
    public DateTime? LogoutTime { get; set; }

    public User? User { get; set; }
}

