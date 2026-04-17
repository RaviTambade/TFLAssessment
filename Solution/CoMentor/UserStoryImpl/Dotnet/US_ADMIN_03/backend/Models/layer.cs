using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class layer
{
    public long id { get; set; }

    public string? layers { get; set; }

    public virtual ICollection<framework> frameworks { get; set; } = new List<framework>();
}
