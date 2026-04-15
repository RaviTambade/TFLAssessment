using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Interview
{
    public long InterviewId { get; set; }

    public long? ApplicationId { get; set; }

    public DateTime? ScheduledAt { get; set; }

    public DateTime? RescheduledAt { get; set; }

    public string? Mode { get; set; }

    public bool? Status { get; set; }

    public string? Remark { get; set; }

    public string? Outcome { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual JobApplication? Application { get; set; }
}
