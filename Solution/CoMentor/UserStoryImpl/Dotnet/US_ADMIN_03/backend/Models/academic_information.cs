using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class academic_information
{
    public long id { get; set; }

    public long? user_id { get; set; }

    public string? stream_name { get; set; }

    public string? specialization { get; set; }

    public long? enrollment_year { get; set; }

    public long? passing_year { get; set; }

    public decimal? percentage { get; set; }

    public string? college_name { get; set; }

    public virtual user? user { get; set; }
}
