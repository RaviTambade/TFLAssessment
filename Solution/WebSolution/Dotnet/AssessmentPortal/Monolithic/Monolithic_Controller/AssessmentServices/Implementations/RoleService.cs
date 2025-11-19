using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Services.Interfaces;
namespace Transflower.TFLAssessment.Services;

public class RoleService : IRoleService
{
    private readonly IRoleRepository _repository;

    public RoleService(IRoleRepository repository)
    {
        _repository = repository; 

    }

    public async Task<List<Role>> GetAllRoles()
    {
        return await _repository.GetAllRoles();
    }
  
    public Task<List<User>> GetUsersByRole(List<int> roleIds)
        {
            return _repository.GetUsersByRole(roleIds);
        }

  }