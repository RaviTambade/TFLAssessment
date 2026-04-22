using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Test
{
    public long Id { get; set; }

     public long? SmeRuntimeId { get; set; }

    public string? Title { get; set; }

    public int? Duration { get; set; }

    public string? Description { get; set; }

    public string? Difficulty { get; set; }

    public DateTime? CreatedAt { get; set; }

    public bool? Status { get; set; }
}
