using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Alumnus
{
    public long AlumniId { get; set; }

    public long? CompaniesId { get; set; }

    public long? UserId { get; set; }

    public DateTime? AddedAt { get; set; }

    public virtual Company? Companies { get; set; }

    public virtual ICollection<Referral> Referrals { get; set; } = new List<Referral>();

    public virtual User? User { get; set; }
}
