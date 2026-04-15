using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class professional_information
{
    public long id { get; set; }

    public long? user_id { get; set; }

    public string? company_name { get; set; }

    public string? job_title { get; set; }

    public string? employment_type { get; set; }

    public DateOnly? start_date { get; set; }

    public DateOnly? end_date { get; set; }

    public bool? is_current_job { get; set; }

    public long? experience_years { get; set; }

    public string? location { get; set; }

    public string? skills { get; set; }

    public virtual user? user { get; set; }
}
