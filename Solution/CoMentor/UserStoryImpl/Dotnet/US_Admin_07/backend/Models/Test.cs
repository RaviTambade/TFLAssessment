using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("tests")]
public class Test
{
    [Key]
    [Column("id")]
    public long Id { get; set; }

    [Column("title")]
    public string? Title { get; set; }
}