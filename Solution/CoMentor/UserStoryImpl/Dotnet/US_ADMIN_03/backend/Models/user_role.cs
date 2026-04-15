using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class user_role
{
    public long id { get; set; }

    public long? user_id { get; set; }

    public long? role_id { get; set; }

    public DateTime? assigned_at { get; set; }

    public virtual role? role { get; set; }

    public virtual user? user { get; set; }
}
