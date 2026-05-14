#include "../SQL_repository/EmployeeRepository.h"
#include "EmployeeServices.h"
using namespace std ;

EmployeeServices::EmployeeServices(IEmployeeRepository *Repository){
    this -> repository = Repository;
}
  
void EmployeeServices:: addEmployee(Employee &Employee){
    repository-> add(Employee);
}

void EmployeeServices:: updateEmployee(int id , Employee &Employee){
    repository->update(id , Employee); 
}

void EmployeeServices:: removeEmployee(int id){
    repository->remove(id);
}
vector<Employee> EmployeeServices:: getAllemployees(){
    return repository-> getAllEmployees();
}