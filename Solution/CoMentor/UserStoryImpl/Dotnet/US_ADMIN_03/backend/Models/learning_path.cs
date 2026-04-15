using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class learning_path
{
    public long id { get; set; }

    public long? mentor_id { get; set; }

    public string? title { get; set; }

    public string? description { get; set; }

    public int? duration { get; set; }

    public int? total_modules { get; set; }

    public bool? status { get; set; }

    public DateTime? created_at { get; set; }

    public DateTime? updated_at { get; set; }

    public virtual ICollection<learning_path_progress> learning_path_progresses { get; set; } = new List<learning_path_progress>();

    public virtual user? mentor { get; set; }
}
