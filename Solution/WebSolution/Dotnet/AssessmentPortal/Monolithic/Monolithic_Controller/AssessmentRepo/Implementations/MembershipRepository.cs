using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.Extensions.Configuration;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories;

public class MembershipRepository : IMembershipRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public MembershipRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<bool> UpdateUserRole(int id, List<Role> roles)
    {
       
        return false;
    }
 
}