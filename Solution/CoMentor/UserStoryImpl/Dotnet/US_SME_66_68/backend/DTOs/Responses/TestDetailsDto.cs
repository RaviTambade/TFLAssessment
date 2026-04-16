namespace Backend.Dtos;

public class TestDetailsDto
{
    public long Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public int Duration { get; set; }
    public string? Difficulty { get; set; }
    public DateTime CreatedAt { get; set; }
    public string? Status { get; set; }
    public List<QuestionDto>? Questions { get; set; }
}

public class QuestionDto
{
    public long QuestionId { get; set; }
    public string? Description { get; set; }
    public string? QuestionType { get; set; }
    public string? DifficultyLevel { get; set; }
    public DateTime CreatedAt { get; set; }
    public string? Status { get; set; }
}