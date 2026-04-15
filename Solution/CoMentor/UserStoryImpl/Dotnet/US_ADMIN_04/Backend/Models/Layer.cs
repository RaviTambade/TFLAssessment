using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Layer
{
    public long Id { get; set; }

    public string? Layers { get; set; }

    public virtual ICollection<Framework> Frameworks { get; set; } = new List<Framework>();
}
