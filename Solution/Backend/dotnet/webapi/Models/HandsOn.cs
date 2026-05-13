using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class HandsOn
{
    public long Id { get; set; }

    public long? QuestionId { get; set; }

    public long? UserId { get; set; }

    public string? Description { get; set; }

    public int? Duration { get; set; }

    public DateTime? CreatedAt { get; set; }
}
