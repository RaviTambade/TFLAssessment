namespace backend.DTOs;

public class AcademicDetailsDto
{
    public int? UserId { get; set; }

    public string? StreamName { get; set; }

    public string? Specialization { get; set; }

    public int? EnrollmentYear { get; set; }

    public int? PassingYear { get; set; }

    public decimal? Percentage { get; set; }

    public string? CollegeName { get; set; }
}
