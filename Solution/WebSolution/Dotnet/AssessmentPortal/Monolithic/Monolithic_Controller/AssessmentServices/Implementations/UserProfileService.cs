using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Services.Interfaces;
namespace Transflower.TFLAssessment.Services;

public class UserProfileService : IUserProfileService
{
    private readonly IUserProfileRepository _repository;

    public UserProfileService(IUserProfileRepository repository)
    {
        _repository = repository;

    }

    public async Task<User> GetUserProfileById(int id)
    {
        return await _repository.GetUserProfileById(id);
    }

    public async Task<bool> UpdateUserProfile(User user, int id)
    {
        return await _repository.UpdateUserProfile(user, id);
    }

    public async Task<User> GetUserByContactNo(string contactno)
    {
        return await _repository.GetUserByContactNo(contactno);
    }


    public async Task<List<Role>> GetRolesByUser(int userid)
    {
        return await _repository.GetRolesByUser(userid);
    }

    public async Task<UserRoleAssign> GetUserRoleByContactNo(string contactnumber)
    {
        return await _repository.GetUserRoleByContactNo(contactnumber);
    }


}