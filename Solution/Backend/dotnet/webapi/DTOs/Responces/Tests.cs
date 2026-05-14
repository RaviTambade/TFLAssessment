namespace backend.DTO.Responses;

public class Tests
{
    public long Id { get; set; }

    public string? Title { get; set; }

    public int? Duration { get; set; }

    public string? Description { get; set; }   

    public string? Difficulty { get; set; }    
}





public class FrameworkDto
{
    public long Id { get; set; }
    public string? Name { get; set; }
}





public class QuestionDto
{
    public long Id { get; set; }
    public string? Title { get; set; }
    public string? Type { get; set; }
    public string? Level { get; set; }
}

