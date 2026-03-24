using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ProjectMember
{
    public long Id { get; set; }

    public long? ProjectId { get; set; }

    public long? StudentId { get; set; }

    public DateTime? JoinedDate { get; set; }
}
