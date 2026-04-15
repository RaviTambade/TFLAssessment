using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class LearningPath
{
    public long Id { get; set; }

    public long? MentorId { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public int? Duration { get; set; }

    public int? TotalModules { get; set; }

    public bool? Status { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<LearningPathProgress> LearningPathProgresses { get; set; } = new List<LearningPathProgress>();

    public virtual User? Mentor { get; set; }
}
