using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class referral
{
    public long id { get; set; }

    public long? companies_id { get; set; }

    public long? user_id { get; set; }

    public long? alumni_id { get; set; }

    public virtual alumnus? alumni { get; set; }

    public virtual company? companies { get; set; }

    public virtual user? user { get; set; }
}
