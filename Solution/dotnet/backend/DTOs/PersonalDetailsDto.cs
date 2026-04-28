namespace backend.DTOs;

public class PersonalDetailsDto
{
    public int? UserId { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? FullName { get; set; }
    public string? Gender { get; set; }
    public DateOnly? DateOfBirth { get; set; }
    public string? Email { get; set; }
    public string? Address { get; set; }
    public string? Pincode { get; set; }
}
