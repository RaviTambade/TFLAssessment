using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class mentor_mentee
{
    public long id { get; set; }

    public long? mentor_id { get; set; }

    public long? mentee_id { get; set; }

    public DateOnly? assigned_on { get; set; }

    public virtual user? mentee { get; set; }

    public virtual user? mentor { get; set; }
}
