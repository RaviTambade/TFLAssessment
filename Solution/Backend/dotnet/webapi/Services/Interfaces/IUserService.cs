using backend.DTO.Requests;
using backend.DTO.Responses;


namespace backend.Services.Interfaces;

public interface IUserService
{
    Task<PersonalDetails?> GetPersonalDetailsAsync(int userId);
    Task<ProfessionalDetails?> GetProfessionalDetailsAsync(int userId);
    Task<AcademicDetails?> GetAcademicDetailsAsync(int userId);
    Task<FullName?> GetFullNameAsync(int userId);
    Task<List<UserRoles>> GetRolesByUserIdAsync(int userId);
}
