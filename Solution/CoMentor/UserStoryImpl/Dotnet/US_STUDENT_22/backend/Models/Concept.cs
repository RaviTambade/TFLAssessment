using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Concept
{
    public long Id { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string Status { get; set; } = null!;

    public DateTime CreatedAt { get; set; }
}
