using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class OralAssessment
{
    public long Id { get; set; }

    public long? StudentId { get; set; }

    public long? SmeId { get; set; }

    public DateTime? TimeScheduleAt { get; set; }

    public string? Status { get; set; }

    public long? ConceptId { get; set; }
}
