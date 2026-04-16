using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class AcademicInformation
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public string? StreamName { get; set; }

    public string? Specialization { get; set; }

    public int? EnrollmentYear { get; set; }

    public int? PassingYear { get; set; }

    public decimal? Percentage { get; set; }

    public string? CollegeName { get; set; }

    public virtual User? User { get; set; }
}
