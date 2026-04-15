using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class interview
{
    public long interview_id { get; set; }

    public long? application_id { get; set; }

    public DateTime? scheduled_at { get; set; }

    public DateTime? rescheduled_at { get; set; }

    public string? mode { get; set; }

    public bool? status { get; set; }

    public string? remark { get; set; }

    public string? outcome { get; set; }

    public DateTime? created_at { get; set; }

    public virtual job_application? application { get; set; }
}
