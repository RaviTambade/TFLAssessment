using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class ProfessionalInformation
{
    public long Id { get; set; }

    public long? UserId { get; set; }

    public string? CompanyName { get; set; }

    public string? JobTitle { get; set; }

    public string? EmploymentType { get; set; }

    public DateOnly? StartDate { get; set; }

    public DateOnly? EndDate { get; set; }

    public bool? IsCurrentJob { get; set; }

    public long? ExperienceYears { get; set; }

    public string? Location { get; set; }

    public string? Skills { get; set; }

    public virtual User? User { get; set; }
}
