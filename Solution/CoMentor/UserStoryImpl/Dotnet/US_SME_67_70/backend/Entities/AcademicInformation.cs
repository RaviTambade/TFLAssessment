using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class AcademicInformation
{
    public long Id { get; set; }

    public long? UserId { get; set; }

    public string? StreamName { get; set; }

    public string? Specialization { get; set; }

    public long? EnrollmentYear { get; set; }

    public long? PassingYear { get; set; }

    public decimal? Percentage { get; set; }

    public string? CollegeName { get; set; }

    public virtual User? User { get; set; }
}
