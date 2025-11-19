using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories.Interfaces;


public interface IRoleRepository
{
    // Get all subjects
    Task<List<Role>> GetAllRoles();
    

    // Must match EXACTLY with the class
    Task<List<User>> GetUsersByRole(List<int> roleIds);

}
