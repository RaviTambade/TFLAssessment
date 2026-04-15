using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class mentor_feedback
{
    public long id { get; set; }

    public long? mentor_id { get; set; }

    public long? student_id { get; set; }

    public int? rating { get; set; }

    public string? review_text { get; set; }

    public DateTime? created_at { get; set; }

    public bool? status { get; set; }

    public virtual user? mentor { get; set; }

    public virtual user? student { get; set; }
}
