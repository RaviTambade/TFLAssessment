using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class Company
{
    public long Id { get; set; }

    public string CompanyName { get; set; } = null!;

    public string? Website { get; set; }

    public string? Industry { get; set; }

    public string? CompanyType { get; set; }

    public string? CompanySize { get; set; }

    public string? Description { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<Alumnus> Alumni { get; set; } = new List<Alumnus>();

    public virtual ICollection<Referral> Referrals { get; set; } = new List<Referral>();
}
