using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class ShortlistedCandidate
{
    public long Id { get; set; }

    public long? UserId { get; set; }

    public long? JobId { get; set; }

    public DateTime? ShortlistedAt { get; set; }

    public string? RoundLevel { get; set; }

    public virtual JobDescription? Job { get; set; }

    public virtual User? User { get; set; }
}
