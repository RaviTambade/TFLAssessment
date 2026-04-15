using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class student_assessment_result
{
    public long id { get; set; }

    public long? student_id { get; set; }

    public long? assessment_id { get; set; }

    public float? score { get; set; }

    public float? percentile { get; set; }

    public long? time_taken_minutes { get; set; }

    public virtual assessment? assessment { get; set; }

    public virtual user? student { get; set; }
}
