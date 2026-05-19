namespace backend.Models;

public class Expertise
{
    public int Id { get; set; }

    public long User_Id { get; set; }

    public string Runtime { get; set; } = string.Empty;

    public string Framework { get; set; } = string.Empty;

    public string Layer { get; set; } = string.Empty;

    public string Language { get; set; } = string.Empty;
}
