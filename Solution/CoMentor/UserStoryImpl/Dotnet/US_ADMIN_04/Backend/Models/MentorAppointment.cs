using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class MentorAppointment
{
    public long Id { get; set; }

    public long? StudentId { get; set; }

    public long? MentorId { get; set; }

    public DateOnly? AppointmentDate { get; set; }

    public TimeOnly? StartTime { get; set; }

    public string? Status { get; set; }

    public string? MeetingLink { get; set; }

    public string? Agenda { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual User? Mentor { get; set; }

    public virtual User? Student { get; set; }
}
