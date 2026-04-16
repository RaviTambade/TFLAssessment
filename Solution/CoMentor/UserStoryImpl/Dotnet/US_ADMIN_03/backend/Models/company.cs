using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class company
{
    public long id { get; set; }

    public string company_name { get; set; } = null!;

    public string? website { get; set; }

    public string? industry { get; set; }

    public string? company_type { get; set; }

    public string? company_size { get; set; }

    public string? description { get; set; }

    public DateTime? created_at { get; set; }

    public DateTime? updated_at { get; set; }

    public virtual ICollection<alumnus> alumni { get; set; } = new List<alumnus>();

    public virtual ICollection<referral> referrals { get; set; } = new List<referral>();
}
