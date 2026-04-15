using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class runtime
{
    public long id { get; set; }

    public string runtime_name { get; set; } = null!;

    public virtual ICollection<language> languages { get; set; } = new List<language>();

    public virtual ICollection<sme_runtime> sme_runtimes { get; set; } = new List<sme_runtime>();
}
