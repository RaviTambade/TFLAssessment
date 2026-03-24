using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ShortlistedCandidate
{
    public long Id { get; set; }

    public long? UserId { get; set; }

    public long? JobId { get; set; }

    public DateTime? ShortlistedAt { get; set; }

    public string? RoundLevel { get; set; }
}
