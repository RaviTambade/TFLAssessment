using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Interview
{
    public int InterviewId { get; set; }

    public int? ApplicationId { get; set; }

    public DateTime? ScheduledAt { get; set; }

    public DateTime? RescheduledAt { get; set; }

    public string? Mode { get; set; }

    public bool? Status { get; set; }

    public string? Remark { get; set; }

    public string? Outcome { get; set; }

    public DateTime? CreatedAt { get; set; }
}
