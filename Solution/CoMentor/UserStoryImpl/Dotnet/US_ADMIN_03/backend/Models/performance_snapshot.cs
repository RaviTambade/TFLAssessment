using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class performance_snapshot
{
    public long id { get; set; }

    public long? student_id { get; set; }

    public DateOnly? snapshot_date { get; set; }

    public string? performance_json { get; set; }

    public virtual user? student { get; set; }
}
