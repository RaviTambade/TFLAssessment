using backend.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Services.Interfaces;

public interface IUserService
{
    Task<PersonalDetailsDto?> GetPersonalDetailsAsync(int userId);
    Task<ProfessionalDetailsDto?> GetProfessionalDetailsAsync(int userId);
    Task<AcademicDetailsDto?> GetAcademicDetailsAsync(int userId);
    Task<FullNameDto?> GetFullNameAsync(int userId);
    Task<List<UserRoleDto>> GetRolesByUserIdAsync(int userId);
}
