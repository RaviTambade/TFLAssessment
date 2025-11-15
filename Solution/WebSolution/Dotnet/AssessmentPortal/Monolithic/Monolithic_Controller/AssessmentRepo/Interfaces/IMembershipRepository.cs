using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories.Interfaces;


public interface IMembershipRepository
{
    // Get all subjects
    Task<bool> UpdateUserRole(int id, List<Role> roles);
}
