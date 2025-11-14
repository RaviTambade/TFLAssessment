using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Services.Interfaces;
namespace Transflower.TFLAssessment.Services;

public class UserRegistrationService : IUserRegistrationService
{
    private readonly IUserRegistrationRepository _repository;

    public UserRegistrationService(IUserRegistrationRepository repository)
    {
        _repository = repository;

    }
    public async Task<bool> AddUser(User user)
    {
        return await _repository.AddUser(user);

    }
}