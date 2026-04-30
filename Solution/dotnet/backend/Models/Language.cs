using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Language
{
    public int Id { get; set; }

    public string? Language1 { get; set; }

    public int? RuntimeId { get; set; }

    public virtual Runtime? Runtime { get; set; }
}
