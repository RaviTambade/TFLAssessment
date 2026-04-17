using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class job_description
{
    public long job_id { get; set; }

    public long? employer_id { get; set; }

    public string? title { get; set; }

    public string? description { get; set; }

    public string? location { get; set; }

    public string? job_type { get; set; }

    public virtual user? employer { get; set; }

    public virtual ICollection<job_application> job_applications { get; set; } = new List<job_application>();

    public virtual ICollection<shortlisted_candidate> shortlisted_candidates { get; set; } = new List<shortlisted_candidate>();
}
