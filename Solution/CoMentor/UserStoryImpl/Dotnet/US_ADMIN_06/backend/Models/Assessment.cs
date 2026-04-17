namespace backend.Models;

public class Assessment
{
    public long Id { get; set; }
    public long? TestId { get; set; }
    public long? StudentId { get; set; }
    public string Status { get; set; } = string.Empty;
}
