using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class MentorCounseling
{
    public long Id { get; set; }

    public long? MentorId { get; set; }

    public long? MenteeId { get; set; }

    public string? Description { get; set; }

    public string? Subject { get; set; }

    public string? MeetingLink { get; set; }

    public DateTime? CounselingDate { get; set; }

    public string? Remark { get; set; }

    public virtual User? Mentee { get; set; }

    public virtual User? Mentor { get; set; }
}
