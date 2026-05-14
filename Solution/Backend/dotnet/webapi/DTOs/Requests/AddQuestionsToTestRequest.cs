namespace backend.DTO.Requests;

/// <summary>
/// DTO for adding questions to a test
/// </summary>
public class AddQuestionsToTestRequest
{
    public List<int> QuestionIds { get; set; } = new List<int>();
}
