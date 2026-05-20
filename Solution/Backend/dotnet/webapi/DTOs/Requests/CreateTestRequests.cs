namespace backend.DTO.Requests;

public class CreateTestRequests
{
    public long UserId { get; set; }
    public long UserRolesId { get; set; }
    public string? Title { get; set; }
    public long Duration { get; set; }
    public string? SkillLevel { get; set; }
    public List<long>? QuestionIds { get; set; }
    public string? Description { get; set; }

    [System.Text.Json.Serialization.JsonPropertyName("user_id")]
    public long UserIdSnakeCase
    {
        get => UserId;
        set => UserId = value;
    }

    [System.Text.Json.Serialization.JsonPropertyName("user_roles_id")]
    public long UserRolesIdSnakeCase
    {
        get => UserRolesId;
        set => UserRolesId = value;
    }

    [System.Text.Json.Serialization.JsonPropertyName("skill_level")]
    public string? SkillLevelSnakeCase
    {
        get => SkillLevel;
        set => SkillLevel = value;
    }

    [System.Text.Json.Serialization.JsonPropertyName("question_ids")]
    public List<long>? QuestionIdsSnakeCase
    {
        get => QuestionIds;
        set => QuestionIds = value;
    }
}
