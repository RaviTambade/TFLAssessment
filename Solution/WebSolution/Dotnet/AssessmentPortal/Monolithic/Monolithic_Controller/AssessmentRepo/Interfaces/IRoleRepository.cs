using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories.Interfaces;


public interface IRoleRepository
{
    // Get all subjects
    Task<List<Role>> GetAllRoles();
    Task<bool> AddNewRole(Role role);

    Task<bool> removeExistingRole(int roleid);
}
