// using Transflower.SubjectAPI.Repositories.Interfaces;

// namespace Transflower.SubjectAPI.Services.Interfaces
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;

namespace Transflower.TFLAssessment.Services.Interfaces;

public interface IMembershipService : IMembershipRepository
{
    Task<bool> UpdateRole(int id, List<Role> roles);
}
