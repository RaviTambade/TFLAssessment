
public class RuntimeDto
{
    public long? Id { get; set; }
    public string? Name { get; set; }
}

public class LanguageDto
{
    public long? Id { get; set; }
    public string? Name { get; set; }
}

public class FrameworkDto
{
    public long Id { get; set; }
    public string? Name { get; set; }
}

public class LayerDto
{
    public long Id { get; set; }
    public string? Name { get; set; }
    public List<FrameworkDto>? Frameworks { get; set; }
}

public class ConceptDto
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

public class CreateTestRequestDto
{
    public long SmeId { get; set; }
    public string? Title { get; set; }
    public long Duration { get; set; }
    public string? SkillLevel { get; set; }
    public List<long>? QuestionIds { get; set; }
}