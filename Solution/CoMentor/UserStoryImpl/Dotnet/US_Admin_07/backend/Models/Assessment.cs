using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("assessments")]
public class Assessment
{
    [Key]
    [Column("id")]
    public long Id { get; set; }

    [Column("test_id")]
    public long TestId { get; set; }

    [Column("student_id")]
    public long StudentId { get; set; }

    [Column("assigned_at")]
    public DateTime AssignedAt { get; set; }

    [Column("scheduled_at")]
    public DateTime ScheduledAt { get; set; }

    [Column("status")]
    public string? Status { get; set; }
}