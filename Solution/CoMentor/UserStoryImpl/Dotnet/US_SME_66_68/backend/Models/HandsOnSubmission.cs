using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class HandsOnSubmission
{
    public long Id { get; set; }

    public long? HandsOnId { get; set; }

    public long? UserId { get; set; }

    public string? GithubLink { get; set; }

    public DateTime? SubmittedAt { get; set; }
}
