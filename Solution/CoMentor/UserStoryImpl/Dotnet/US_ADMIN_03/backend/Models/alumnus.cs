using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class alumnus
{
    public long alumni_id { get; set; }

    public long? companies_id { get; set; }

    public long? user_id { get; set; }

    public DateTime? added_at { get; set; }

    public virtual company? companies { get; set; }

    public virtual ICollection<referral> referrals { get; set; } = new List<referral>();

    public virtual user? user { get; set; }
}
