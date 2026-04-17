using System;
using System.Collections.Generic;

namespace backend.Entities;

public partial class MentorMentee
{
    public long Id { get; set; }

    public long? MentorId { get; set; }

    public long? MenteeId { get; set; }

    public DateOnly? AssignedOn { get; set; }

    public virtual User? Mentee { get; set; }

    public virtual User? Mentor { get; set; }
}
