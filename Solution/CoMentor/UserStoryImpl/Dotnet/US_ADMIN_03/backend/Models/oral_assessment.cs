using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class oral_assessment
{
    public long id { get; set; }

    public long? student_id { get; set; }

    public long? sme_id { get; set; }

    public long? concept_id { get; set; }

    public DateTime? time_schedule_at { get; set; }

    public string? status { get; set; }

    public virtual concept? concept { get; set; }

    public virtual user? sme { get; set; }

    public virtual user? student { get; set; }
}
