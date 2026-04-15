using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class project
{
    public long project_id { get; set; }

    public long? mentor_id { get; set; }

    public string? project_name { get; set; }

    public string? description { get; set; }

    public string? repository_url { get; set; }

    public string? status { get; set; }

    public DateTime? created_at { get; set; }

    public virtual user? mentor { get; set; }

    public virtual ICollection<project_member> project_members { get; set; } = new List<project_member>();
}
