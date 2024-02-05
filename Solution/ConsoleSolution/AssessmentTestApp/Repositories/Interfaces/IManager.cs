using HR.Entities;
namespace HR.Repositories.Interfaces;

public interface IManager{
    public List<Employee> GetAll();
    public bool Insert(Employee emp);
    public bool Update(Employee emp);
    public bool Delete(int id);
    
}