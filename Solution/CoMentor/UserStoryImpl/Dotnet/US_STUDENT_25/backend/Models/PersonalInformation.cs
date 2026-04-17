using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PersonalInformation
{
    public long Id { get; set; }

    public long? UserId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? FullName { get; set; }

    public string? Gender { get; set; }

    public DateOnly? DateOfBirth { get; set; }

    public string Email { get; set; } = null!;

    public string? Address { get; set; }

    public string? Pincode { get; set; }

    public virtual User? User { get; set; }
}
