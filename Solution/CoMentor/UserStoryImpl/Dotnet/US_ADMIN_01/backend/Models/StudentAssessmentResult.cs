using System.ComponentModel.DataAnnotations.Schema;
[Table("student_assessment_results")]
public class StudentAssessmentResult
{
    [Column("id")]
    public long Id { get; set; }

    [Column("student_id")]
    public long StudentId { get; set; }

    [Column("assessment_id")]
    public long AssessmentId { get; set; }

    [Column("score")]
    public double? Score { get; set; }

    [Column("percentile")]
    public double? Percentile { get; set; }

    [Column("time_taken_minutes")]
    public int? TimeTakenMinutes { get; set; }

    public Assessment? Assessment { get; set; }
    public User? Student { get; set; }
}