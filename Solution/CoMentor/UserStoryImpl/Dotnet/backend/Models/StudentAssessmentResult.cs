using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class StudentAssessmentResult
{
    public int Id { get; set; }

    public int? StudentId { get; set; }

    public int? AssessmentId { get; set; }

    public float Score { get; set; }

    public float Percentile { get; set; }

    public int? TimeTakenMinutes { get; set; }
}
