using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class mentor_appointment
{
    public long id { get; set; }

    public long? student_id { get; set; }

    public long? mentor_id { get; set; }

    public DateOnly? appointment_date { get; set; }

    public TimeOnly? start_time { get; set; }

    public string? status { get; set; }

    public string? meeting_link { get; set; }

    public string? agenda { get; set; }

    public DateTime? created_at { get; set; }

    public DateTime? updated_at { get; set; }

    public virtual user? mentor { get; set; }

    public virtual user? student { get; set; }
}
