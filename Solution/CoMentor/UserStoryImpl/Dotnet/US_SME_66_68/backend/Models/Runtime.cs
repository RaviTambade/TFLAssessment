using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Runtime
{
    public int Id { get; set; }

    public string? RuntimeName { get; set; }

    public virtual ICollection<Language> Languages { get; set; } = new List<Language>();
}
