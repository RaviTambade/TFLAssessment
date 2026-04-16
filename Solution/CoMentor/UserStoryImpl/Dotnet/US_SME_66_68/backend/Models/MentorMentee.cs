using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class MentorMentee
{
    public int Id { get; set; }

    public int? MentorId { get; set; }

    public int? MenteeId { get; set; }

    public DateOnly? AssignedOn { get; set; }

    public virtual User? Mentee { get; set; }

    public virtual User? Mentor { get; set; }
}
