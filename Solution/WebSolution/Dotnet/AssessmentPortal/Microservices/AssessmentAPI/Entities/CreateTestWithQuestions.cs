public class CreateTestWithQuestions
{
    public int SubjectId { get; set; }
    public string Name { get; set; }
    public string Duration { get; set; } // Format: "00:30:00"
    public int SmeId { get; set; }
    public DateTime ScheduledDate { get; set; }
    public int PassingLevel { get; set; }
    public List<int> QuestionIds { get; set; }  // Selected question IDs
}
