using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class mentor_counseling
{
    public long id { get; set; }

    public long? mentor_id { get; set; }

    public long? mentee_id { get; set; }

    public string? description { get; set; }

    public string? subject { get; set; }

    public string? meeting_link { get; set; }

    public DateTime? counseling_date { get; set; }

    public string? remark { get; set; }

    public virtual user? mentee { get; set; }

    public virtual user? mentor { get; set; }
}
