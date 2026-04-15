using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class sme_runtime
{
    public long sme_runtime_id { get; set; }

    public long? user_roles_id { get; set; }

    public long? runtime_id { get; set; }

    public virtual runtime? runtime { get; set; }

    public virtual ICollection<test> tests { get; set; } = new List<test>();
}
