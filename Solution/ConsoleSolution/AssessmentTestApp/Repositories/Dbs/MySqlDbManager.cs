using HR.Entities;
using HR.Repositories.Interfaces;
namespace HR.Repositories.Managers.Dbs;
public class MySqlDbManager:IManager{

public List<Employee> GetAll(){
//data base code for fetching all Employees

List<Employee> employees=new List<Employee>();
        Employee emp=new Employee();
        emp.id=45;
        emp.fname="Ravi";
        emp.lname="Tambade";
        emp.contactno="9881735801";
        emp.email="ravi.tambade@gmail.com";
        employees.Add(emp);

        Employee emp2=new Employee();
        emp2.id=48;
        emp2.fname="Shreedhar";
        emp2.lname="Patil";
        emp2.contactno="98834876";
        emp2.email="shreedhar.patil@gmail.com";
        employees.Add(emp2);
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