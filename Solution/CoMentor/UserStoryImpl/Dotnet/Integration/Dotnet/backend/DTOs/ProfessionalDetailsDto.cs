namespace backend.DTOs;

public class ProfessionalDetailsDto
{
    public int? UserId { get; set; }
    public string? CompanyName { get; set; }
    public string? JobTitle { get; set; }
    public string? EmploymentType { get; set; }
    public DateOnly? StartDate { get; set; }
    public DateOnly? EndDate { get; set; }
    public bool? IsCurrentJob { get; set; }
    public int? ExperienceYears { get; set; }
    public string? Location { get; set; }
    public string? Skills { get; set; }
}
