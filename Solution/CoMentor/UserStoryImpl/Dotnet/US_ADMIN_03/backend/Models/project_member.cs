using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class project_member
{
    public long id { get; set; }

    public long? project_id { get; set; }

    public long? student_id { get; set; }

    public DateTime? joined_date { get; set; }

    public virtual project? project { get; set; }

    public virtual user? student { get; set; }
}
