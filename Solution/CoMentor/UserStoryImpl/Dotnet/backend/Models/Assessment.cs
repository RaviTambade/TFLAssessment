using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Assessment
{
    public long Id { get; set; }

    public long? TestId { get; set; }

    public long? StudentId { get; set; }

    public long? AssignedBy { get; set; }

    public DateTime? AssignedAt { get; set; }

    public DateTime? ScheduledAt { get; set; }

    public string Status { get; set; } = null!;
}
