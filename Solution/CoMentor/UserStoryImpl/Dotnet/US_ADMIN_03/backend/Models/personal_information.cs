using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class personal_information
{
    public long id { get; set; }

    public long? user_id { get; set; }

    public string? first_name { get; set; }

    public string? last_name { get; set; }

    public string? full_name { get; set; }

    public string? gender { get; set; }

    public DateOnly? date_of_birth { get; set; }

    public string email { get; set; } = null!;

    public string? address { get; set; }

    public string? pincode { get; set; }

    public virtual user? user { get; set; }
}
