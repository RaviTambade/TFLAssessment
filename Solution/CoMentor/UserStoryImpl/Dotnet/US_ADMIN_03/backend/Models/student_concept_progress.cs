using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class student_concept_progress
{
    public long id { get; set; }

    public long? student_id { get; set; }

    public long? concept_id { get; set; }

    public string? status { get; set; }

    public DateTime? initiated_at { get; set; }

    public DateTime? completed_at { get; set; }

    public virtual concept? concept { get; set; }

    public virtual user? student { get; set; }
}
