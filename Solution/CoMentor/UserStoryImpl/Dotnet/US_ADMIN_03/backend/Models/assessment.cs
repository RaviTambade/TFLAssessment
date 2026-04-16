using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class assessment
{
    public long id { get; set; }

    public long? test_id { get; set; }

    public long? student_id { get; set; }

    public long? assigned_by { get; set; }

    public DateTime? assigned_at { get; set; }

    public DateTime? scheduled_at { get; set; }

    public string status { get; set; } = null!;

    public virtual user? assigned_byNavigation { get; set; }

    public virtual user? student { get; set; }

    public virtual ICollection<student_assessment_result> student_assessment_results { get; set; } = new List<student_assessment_result>();

    public virtual test? test { get; set; }
}
