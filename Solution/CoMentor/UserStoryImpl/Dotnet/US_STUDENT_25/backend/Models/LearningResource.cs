using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class LearningResource
{
    public long Id { get; set; }

    public string Title { get; set; } = null!;

    public string? Description { get; set; }

    public string? ResourceUrl { get; set; }

    public string? Type { get; set; }

    public long? UploadedBy { get; set; }

    public string? Status { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual User? UploadedByNavigation { get; set; }
}
