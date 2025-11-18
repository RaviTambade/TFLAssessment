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

    public async Task<bool> AddNewRole(Role role)
    {
        return await _repository.AddNewRole(role);
    }

    public async Task<bool> removeExistingRole(int roleid)
    {
        return await _repository.removeExistingRole(roleid);
    }
  }