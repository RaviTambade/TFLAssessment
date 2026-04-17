using System.ComponentModel.DataAnnotations.Schema;
[Table("tests")]
public class Test
{
    
    [Column("id")]

    public long Id { get; set; }

        [Column("title")]
    public string? Title { get; set; }

    public ICollection<Assessment>? Assessments { get; set; }
}