using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories.Interfaces;


public interface IMembershipRepository
{
    // Get all subjects
    Task<List<Employee>> GetAllEmployee();

    Task<bool> AddNewEmployee(Employee employee);
    Task<bool> UpdateUserRole(int userid,Role roles);
    Task<bool> DeleteUserRole(int userid);
    Task<Employee> GetEmployeeByUserId(int id);
    Task<bool> DeleteSmeSubject(int empId);
}
