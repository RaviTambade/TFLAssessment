using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Services.Interfaces;
namespace Transflower.TFLAssessment.Services;

public class MembershipService : IMembershipService
{
    private readonly IMembershipRepository _repository;
    private readonly IUserProfileRepository _userRepository;


    public MembershipService(IMembershipRepository repository, IUserProfileRepository _userRepo)
    {
        _repository = repository;
        _userRepository=_userRepo;

    }

    public async Task<List<Employee>> GetAllEmployee()
    {
        return await _repository.GetAllEmployee();
    }

    public async Task<bool> AddNewEmployee(Employee employee)
    {
        return await _repository.AddNewEmployee(employee);
    }

    public async Task<Employee> GetEmployeeByUserId(int id)
    {
        return await _repository.GetEmployeeByUserId(id);
    }

    public async Task<bool> UpdateUserRole(int userid, Role roles)
    {
        return await _repository.UpdateUserRole(userid,roles);
    }
    public async Task<bool> DeleteUserRole(int userid)
    {
        return await _repository.DeleteUserRole(userid);
    }
    public async Task<bool> DeleteSmeSubject(int empId)
    {
        return await _repository.DeleteSmeSubject(empId);
    }

    public async Task<bool> AssignSubject(int empid, int subjectid)
    {
        return await _repository.AssignSubject(empid, subjectid);
    }

    public async Task<bool> RemoveAssignSubject(int empid, int subjectid)
    {
        return await _repository.RemoveAssignSubject(empid, subjectid);
    }

    public async Task<int> GetAssignsubject(int empId, int subjectId)
    {
        return await _repository.GetAssignsubject(empId, subjectId);
    }

    public async Task<bool> UpdateRole(int id, List<Role> roles)
    {
        bool status = false;
        bool insertStatus = false;
        bool deleteRoleStatus=false;
        bool insertRoleStatus=false;
        bool isSme=false;
        bool removeSme=false;

        Employee employee = await GetEmployeeByUserId(id);

        User newUser = await _userRepository.GetUserProfileById(id);

        Employee newEmployee = new Employee();
        newEmployee.UserId = newUser.Id;
        newEmployee.FirstName = newUser.Firstname;
        newEmployee.LastName = newUser.Lastname;
        newEmployee.Email = newUser.Email;
        newEmployee.Contact = newUser.ContactNumber;

        if (employee.Email == null)
        {
            insertStatus = await AddNewEmployee(newEmployee);
        }


        List<Role> existingRole = await _userRepository.GetRolesByUser(id);
        if(existingRole.Count > 0)
        {
            deleteRoleStatus = await DeleteUserRole(id);
        }

        foreach(Role newRole in roles)
        {
            insertRoleStatus= await UpdateUserRole(id,newRole);
            if(newRole.Name=="sme")
            {
                isSme=true;
            }
        }

        if(isSme==false)
        {
            List<Subject> existingSubject = await _userRepository.GetSubjectBySmeId(employee.Id);
            if(existingSubject.Count >0)
            {
                removeSme = await DeleteSmeSubject(employee.Id);
            }
        }
        return insertRoleStatus;
    }

    public async Task<bool> UpdateSmeSubject(int empid, int subjectid)
    {
        bool status=false;
        bool insertStatus=false;

        int existingid = await _repository.GetAssignsubject(empid, subjectid);

        if(existingid<0)
        {
            insertStatus= await _repository.AssignSubject(empid, subjectid);
        }

        return insertStatus;
    }
}