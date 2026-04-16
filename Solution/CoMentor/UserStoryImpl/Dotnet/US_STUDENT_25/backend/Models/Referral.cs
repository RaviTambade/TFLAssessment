using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Referral
{
    public long Id { get; set; }

    public long? CompaniesId { get; set; }

    public long? UserId { get; set; }

    public long? AlumniId { get; set; }

    public virtual Alumnus? Alumni { get; set; }

    public virtual Company? Companies { get; set; }

    public virtual User? User { get; set; }
}
