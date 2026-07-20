namespace backend.DTO.Responses;

public class TestStudentDetails
{
    public long TestId{get;set;}
    public string Title { get; set; }
    public string StudentName { get; set; }
    public string StudentIds { get; set; }
    public string Difficulty { get; set; }
    public int Duration { get; set; }
    public DateTime CreatedAt { get; set; }
    
}