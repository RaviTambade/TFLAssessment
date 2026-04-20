using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class MentorCounseling
{
    public int Id { get; set; }

    public int? MentorId { get; set; }

    public int? MenteeId { get; set; }

    public string? Description { get; set; }

    public string? Subject { get; set; }

    public string? MeetingLink { get; set; }

    public DateTime? CounselingDate { get; set; }

    public string? Remark { get; set; }
}
