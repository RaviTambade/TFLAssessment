using HR.Entities;
using HR.Repositories.Interfaces;
namespace HR.Repositories.Managers.Dbs;
public class MySqlDbManager:IManager{

public List<Employee> GetAll(){
//data base code for fetching all Employees

List<Employee> employees=new List<Employee>();
        Employee emp=new Employee();
        //Data Access code 
        //Get all employees from table
        //Create list of employees from fetched data
        //send list of employees.

        return employees;
}

public bool Insert(Employee emp){

//data base code for inserting new employee oject
    return false;
}

public bool Update(Employee emp){
//data base code for updating existing employee oject
return false;
}

public bool Delete(int id){

//data base code for deleting  existing employee oject

        return false;
}

}