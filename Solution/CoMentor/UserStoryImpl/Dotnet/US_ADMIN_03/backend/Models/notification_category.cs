using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class notification_category
{
    public long id { get; set; }

    public string category { get; set; } = null!;

    public string? description { get; set; }

    public virtual ICollection<notification> notifications { get; set; } = new List<notification>();
}
