using HR.Entities;
using HR.Repositories.Interfaces;
namespace HR.Repositories.Managers.Files;
public class FileManager:IManager{
public List<Employee> GetAll(){
//REST API invoke code for fetching all Employees
    List<Employee> employees=new List<Employee>();

    return employees;
}

public bool  Insert(Employee emp){

//REST API invoke  code for inserting new employee oject
    
  return false;
}

public bool Update(Employee emp){
//REST API invoke code for updating existing employee oject
    return false;
}

public bool Delete(int id){
//REST API invoke  code for deleting  existing employee oject
    return false;


}

public void Serilaize(){

}

public void Deserilaize(){
    
}

}