using HR.Entities;

namespace HR.Services.Interfaces;
public interface IEmployeeService{
    public List<Employee> GetAll();
    public Employee GetById(int id);
    public bool Delete(int id);
    public bool Insert(Employee emp);
    public bool Update(Employee emp);
    
}