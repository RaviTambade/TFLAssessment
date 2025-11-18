using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories.Interfaces;


public interface IUserProfileRepository
{
    // Get all subjects
    Task<User> GetUserProfileById(int id);

    Task<User> GetUserByContactNo(string contactnumber);
    Task<List<Role>> GetRolesByUser(int userid);

    Task<UserRoleAssign> GetUserRoleByContactNo(string contactnumber);
    // edit user Profile
    Task<bool> UpdateUserProfile(User user, int id);
    // Delete a user Profile
    Task<List<User>> GetAllSmeUser();
    Task<List<Subject>> GetSubjectBySmeId(int id);

    Task<List<UserSubjectAssign>> GetAllSmeDetails();

   
}
