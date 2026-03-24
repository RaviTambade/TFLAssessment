using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Alumnus
{
    public long AlumniId { get; set; }

    public long? CompanyId { get; set; }

    public long? UserId { get; set; }

    public DateTime? AddedAt { get; set; }
}
