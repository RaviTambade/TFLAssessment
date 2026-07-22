using backend.DTO.Responses;

namespace backend.Services.Interfaces;

public interface IRolesService{
    Task<int> GetActiveRolesCount();
    Task<List<ActiveRole>> GetActiveRoles();
    Task<List<RoleUser>> GetUsersByRole(long roleId); 
    Task<List<unassignedUsers>> GetUnAssignedUsers();
}