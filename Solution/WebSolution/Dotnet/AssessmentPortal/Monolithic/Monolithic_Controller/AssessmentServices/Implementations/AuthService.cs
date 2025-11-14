using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;

using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Entities.Models;
using Transflower.TFLAssessment.Services.Interfaces;

namespace Transflower.TFLAssessment.Services;

public class AuthService : IAuthService
{
    private readonly IAuthRepository _repository;
    private readonly IConfiguration _config;
    public AuthService(IAuthRepository repository, IConfiguration config)
    {
        _repository = repository;
        _config = config;
    }

    public async Task<LoginResponse> GetUserWithRolesByEmail(string email, string password)
    {
        var user = await _repository.GetUserWithRolesByEmail(email, password);
        if (user == null || user.Password != password)
            return null;

        var roles = user.UserRoles.Select(r => r.Role.Name).ToList();
        var token = GenerateJwtToken(user);

        return new LoginResponse
        {
            Token = token,
            // User = new UserDTO
            User = new User
            {
                Id = user.Id,
                Firstname = user.Firstname,
                Lastname = user.Lastname,
                Email = user.Email,
                // Roles = roles
                UserRoles = user.UserRoles
            }
        };
    }
    private string GenerateJwtToken(User user)
    {
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email)
        };

        foreach (var role in user.UserRoles)
            claims.Add(new Claim(ClaimTypes.Role, role.Role.Name));

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddHours(2),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
     public async Task<bool> AddUser(User user)
    {
        return await _repository.AddUser(user);

    }
}