using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Framework
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public long? LayerId { get; set; }

    public int? LanguageId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }
}
