using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Referral
{
    public long Id { get; set; }

    public long? CompanyId { get; set; }

    public long? UserId { get; set; }

    public long? AlumniId { get; set; }
}
