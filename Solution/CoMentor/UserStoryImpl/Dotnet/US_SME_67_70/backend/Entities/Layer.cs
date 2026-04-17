using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class Layer
{
    public long Id { get; set; }

    public string? Layers { get; set; }

    public virtual ICollection<Framework> Frameworks { get; set; } = new List<Framework>();
}
