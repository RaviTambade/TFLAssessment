using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class HandsOnSubmission
{
    public long Id { get; set; }

    public long? QuestionId { get; set; }

    public long? UserId { get; set; }

    public string? GithubLink { get; set; }

    public DateTime? SubmittedAt { get; set; }

    public virtual Question? Question { get; set; }

    public virtual User? User { get; set; }
}
