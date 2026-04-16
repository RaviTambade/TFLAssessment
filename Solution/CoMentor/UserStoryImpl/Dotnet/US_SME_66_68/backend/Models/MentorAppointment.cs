using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class MentorAppointment
{
    public int Id { get; set; }

    public int? StudentId { get; set; }

    public int? MentorId { get; set; }

    public DateOnly? AppointmentDate { get; set; }

    public TimeOnly? StartTime { get; set; }

    public string? Status { get; set; }

    public string? MeetingLink { get; set; }

    public string? Agenda { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }
}
