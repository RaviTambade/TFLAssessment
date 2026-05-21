namespace backend.DTO.Requests;

// public class CreateTestRequests
// {
//     public long UserRolesId { get; set; }
//     public long SmeId { get; set; }
//     public string? Title { get; set; }
//     public long Duration { get; set; }
//     public string? SkillLevel { get; set; }
//     public List<long>? QuestionIds { get; set; }
//     public string? Description { get; set; }

// }




public class CreateTestRequests
{
    public long UserId { get; set; }
    public long UserRolesId { get; set; }
    public string? Title { get; set; }

    public int Duration { get; set; }

    public string? Description { get; set; }

     public string? Difficulty { get; set; }

     public List<long>? QuestionIds { get; set; }


}
