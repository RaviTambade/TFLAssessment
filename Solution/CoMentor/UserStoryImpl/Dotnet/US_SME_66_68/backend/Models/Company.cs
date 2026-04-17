using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Company
{
    public int Id { get; set; }

    public string? CompanyName { get; set; }

    public string? Website { get; set; }

    public string? Industry { get; set; }

    public string? CompanyType { get; set; }

    public string? CompanySize { get; set; }

    public string? Description { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }
}
