using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class shortlisted_candidate
{
    public long id { get; set; }

    public long? user_id { get; set; }

    public long? job_id { get; set; }

    public DateTime? shortlisted_at { get; set; }

    public string? round_level { get; set; }

    public virtual job_description? job { get; set; }

    public virtual user? user { get; set; }
}
