using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class MentorFeedback
{
    public long Id { get; set; }

    public long? MentorId { get; set; }

    public long? StudentId { get; set; }

    public int? Rating { get; set; }

    public string? ReviewText { get; set; }

    public DateTime? CreatedAt { get; set; }

    public bool? Status { get; set; }

    public virtual User? Mentor { get; set; }

    public virtual User? Student { get; set; }
}
