using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class role
{
    public long role_id { get; set; }

    public string role_name { get; set; } = null!;

    public string? description { get; set; }

    public virtual ICollection<user_role> user_roles { get; set; } = new List<user_role>();
}
