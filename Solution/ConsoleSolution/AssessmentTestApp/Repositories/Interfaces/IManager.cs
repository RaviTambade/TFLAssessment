using HR.Entities;
namespace HR.Repositories.Interfaces;


//interfaces act like contract
//interaces also act like agreement between consumer and provider
public interface IManager{
    public List<Employee> GetAll();
    public bool Insert(Employee emp);
    public bool Update(Employee emp);
    public bool Delete(int id);
}