using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class JobDescription
{
    public long JobId { get; set; }

    public long? EmployerId { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public string? Location { get; set; }

    public string? JobType { get; set; }
}
