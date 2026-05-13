namespace backend.DTOs;

/// <summary>
/// DTO for adding questions to a test
/// </summary>
public class AddQuestionsToTestRequestDto
{
    public List<int> QuestionIds { get; set; } = new List<int>();
}
