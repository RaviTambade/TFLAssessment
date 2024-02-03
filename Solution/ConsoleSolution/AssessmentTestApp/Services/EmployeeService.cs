using HR.Entities;
using HR.Services.Interfaces;
using HR.Repositories.Interfaces;
using HR.Repositories.Managers.Dbs;
    
namespace HR.Services;
public class EmployeeService:IEmployeeService{
    public List<Employee> GetAll(){
        List<Employee> employees=new List<Employee>();
        IManager mgr=new MySqlDbManager();
        employees=mgr.GetAll();
        return employees;
    }
    public Employee GetById(int id){
        Employee emp=new Employee();
      

        return emp;
    }
    public bool Delete(int id){
        bool status=false;
        //
        return status;
    }
    public bool Insert(Employee emp){
        bool status=false;
        //
        return status;
    }
    public bool Update(Employee emp){
        bool status=false;
        //
        return status;
    }
}