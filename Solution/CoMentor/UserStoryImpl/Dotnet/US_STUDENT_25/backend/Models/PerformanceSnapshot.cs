using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PerformanceSnapshot
{
    public long Id { get; set; }

    public long? StudentId { get; set; }

    public DateOnly? SnapshotDate { get; set; }

    public string? PerformanceJson { get; set; }

    public virtual User? Student { get; set; }
}
