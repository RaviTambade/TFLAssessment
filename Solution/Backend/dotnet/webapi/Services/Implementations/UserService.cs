using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Models;
using backend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services.Implementations;

public class UserService : IUserService
{
    private readonly AppDbContext _context;

    public UserService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<PersonalDetails?> GetPersonalDetailsAsync(int userId)
    {
        return await _context.PersonalInformations
            .Where(p => p.UserId == userId)
            .Select(p => new PersonalDetails
            {
                UserId = p.UserId,
                FirstName = p.FirstName,
                LastName = p.LastName,
                FullName = p.FullName,
                Gender = p.Gender,
                DateOfBirth = p.DateOfBirth,
                Email = p.Email,
                Address = p.Address,
                Pincode = p.Pincode
            })
            .FirstOrDefaultAsync();
    }

    public async Task<ProfessionalDetails?> GetProfessionalDetailsAsync(int userId)
    {
        return await _context.ProfessionalInformations
            .Where(p => p.UserId == userId)
            .Select(p => new ProfessionalDetails
            {
                UserId = p.UserId,
                CompanyName = p.CompanyName,
                JobTitle = p.JobTitle,
                EmploymentType = p.EmploymentType,
                StartDate = p.StartDate,
                EndDate = p.EndDate,
                IsCurrentJob = p.IsCurrentJob,
                ExperienceYears = p.ExperienceYears,
                Location = p.Location,
                Skills = p.Skills
            })
            .FirstOrDefaultAsync();
    }

    public async Task<AcademicDetails?> GetAcademicDetailsAsync(int userId)
    {
        return await _context.AcademicInformations
            .Where(a => a.UserId == userId)
            .Select(a => new AcademicDetails
            {
                UserId = a.UserId,
                StreamName = a.StreamName,
                Specialization = a.Specialization,
                EnrollmentYear = a.EnrollmentYear,
                PassingYear = a.PassingYear,
                Percentage = a.Percentage,
                CollegeName = a.CollegeName
            })
            .FirstOrDefaultAsync();
    }

    public async Task<FullName?> GetFullNameAsync(int userId)
    {
        return await _context.PersonalInformations
            .Where(p => p.UserId == userId)
            .Select(p => new FullName
            {
                UserId = p.UserId,
                FirstName = p.FirstName,
                LastName = p.LastName,
                Full_Name = p.FullName ?? string.Join(" ", new[] { p.FirstName, p.LastName }.Where(x => !string.IsNullOrWhiteSpace(x)))
            })
            .FirstOrDefaultAsync();
    }

    public async Task<List<UserRoles>> GetRolesByUserIdAsync(int userId)
    {
        return await _context.UserRoles
            .Where(ur => ur.UserId == userId)
            .Include(ur => ur.Role)
            .Select(ur => new UserRoles
            {
                RoleId = ur.RoleId,
                RoleName = ur.Role != null ? ur.Role.RoleName : null,
                AssignedAt = ur.AssignedAt
            })
            .ToListAsync();
    }
}
