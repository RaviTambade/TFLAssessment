using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Referral
{
    public long Id { get; set; }

    public long? CompanyId { get; set; }

    public long? UserId { get; set; }

    public long? AlumniId { get; set; }
}
