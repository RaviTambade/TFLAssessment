using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class PerformanceSnapshot
{
    public int Id { get; set; }

    public int? StudentId { get; set; }

    public DateOnly? SnapshotDate { get; set; }

    public string? PerformanceJson { get; set; }
}
