using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class PersonalInformation
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? FullName { get; set; }

    public string? Gender { get; set; }

    public DateOnly? DateOfBirth { get; set; }

    public string? Email { get; set; }

    public string? Address { get; set; }

    public string? Pincode { get; set; }

    public virtual User? User { get; set; }
}
