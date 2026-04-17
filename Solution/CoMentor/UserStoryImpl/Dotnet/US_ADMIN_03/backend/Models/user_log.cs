using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class user_log
{
    public long id { get; set; }

    public long? user_id { get; set; }

    public DateTime? login_time { get; set; }

    public DateTime? logout_time { get; set; }

    public virtual user? user { get; set; }
}
