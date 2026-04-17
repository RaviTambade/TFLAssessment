using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class StudentAssessmentResult
{
    public long Id { get; set; }

    public long? StudentId { get; set; }

    public long? AssessmentId { get; set; }

    public float? Score { get; set; }

    public float? Percentile { get; set; }

    public long? TimeTakenMinutes { get; set; }

    public virtual Assessment? Assessment { get; set; }

    public virtual User? Student { get; set; }
}
