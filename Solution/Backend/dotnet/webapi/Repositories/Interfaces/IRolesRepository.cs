using backend.DTO.Responses;

namespace backend.Repositories.Interfaces;

public interface IRolesRepository{
    Task<int> GetActiveRolesCount();
    Task<List<ActiveRole>> GetActiveRoles();
    Task<List<RoleUser>> GetUsersByRole(long roleId);
    Task<List<unassignedUsers>> GetUnAssignedUsers();
}
