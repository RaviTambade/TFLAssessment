using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class ProjectMember
{
    public long Id { get; set; }

    public long? ProjectId { get; set; }

    public long? StudentId { get; set; }

    public DateTime? JoinedDate { get; set; }

    public virtual Project? Project { get; set; }

    public virtual User? Student { get; set; }
}
