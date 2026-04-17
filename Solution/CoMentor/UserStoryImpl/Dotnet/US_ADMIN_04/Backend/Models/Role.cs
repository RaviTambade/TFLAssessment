using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Role
{
    public long RoleId { get; set; }

    public string RoleName { get; set; } = null!;

    public string? Description { get; set; }

    public virtual ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
}
