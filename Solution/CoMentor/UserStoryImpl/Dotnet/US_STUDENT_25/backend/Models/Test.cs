using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Test
{
    public long Id { get; set; }

    public long? SmeRuntimeId { get; set; }

    public string? Title { get; set; }

    public long? Duration { get; set; }

    public string? Description { get; set; }

    public string? Difficulty { get; set; }

    public DateTime? CreatedAt { get; set; }

    public bool? Status { get; set; }

    public virtual ICollection<Assessment> Assessments { get; set; } = new List<Assessment>();

    public virtual SmeRuntime? SmeRuntime { get; set; }

    public virtual ICollection<TestQuestion> TestQuestions { get; set; } = new List<TestQuestion>();
}
