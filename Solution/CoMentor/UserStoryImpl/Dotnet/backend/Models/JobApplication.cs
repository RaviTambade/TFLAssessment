using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class JobApplication
{
    public int Id { get; set; }

    public int? JobId { get; set; }

    public int? StudentId { get; set; }

    public bool? Status { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public DateTime? AppliedAt { get; set; }
}
