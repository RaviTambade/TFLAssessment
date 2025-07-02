public class TestWithQuestions
{
    // Test fields
    public int Id { get; set; }
    public string Name { get; set; }
    public int SubjectId { get; set; }
    public string Duration { get; set; }
    public int SmeId { get; set; }
    public DateTime CreationDate { get; set; }
    public DateTime ModificationDate { get; set; }
    public DateTime ScheduledDate { get; set; }
    public int PassingLevel { get; set; }
    public string Status { get; set; }

    // List of related questions
    public List<Question> Questions { get; set; } = new();
}