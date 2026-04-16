using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class JobApplication
{
    public long Id { get; set; }

    public long? JobId { get; set; }

    public long? StudentId { get; set; }

    public bool? Status { get; set; }

    public DateTime? AppliedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<Interview> Interviews { get; set; } = new List<Interview>();

    public virtual JobDescription? Job { get; set; }

    public virtual User? Student { get; set; }
}
