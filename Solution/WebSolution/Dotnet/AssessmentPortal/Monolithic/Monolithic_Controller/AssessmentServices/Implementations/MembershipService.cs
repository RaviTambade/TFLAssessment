using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Services.Interfaces;
namespace Transflower.TFLAssessment.Services;

public class MembershipService : IMembershipService
{
    private readonly IMembershipRepository _repository;

    public MembershipService(IMembershipRepository repository)
    {
        _repository = repository;

    }

    public async Task<bool> UpdateUserRole(int id, List<Role> roles)
    {
        return await _repository.UpdateUserRole(id,roles);
    }

}