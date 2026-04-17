using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class job_application
{
    public long id { get; set; }

    public long? job_id { get; set; }

    public long? student_id { get; set; }

    public bool? status { get; set; }

    public DateTime? applied_at { get; set; }

    public DateTime? updated_at { get; set; }

    public virtual ICollection<interview> interviews { get; set; } = new List<interview>();

    public virtual job_description? job { get; set; }

    public virtual user? student { get; set; }
}
