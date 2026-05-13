#ifndef EMPLOYEESERVICES_H
#define EMPLOYEESERVICES_H
#include "../SQL_repository/EmployeeRepository.h"
#include "IEmployeeServices.h"
class EmployeeServices: public IEmployeeServices{

public:
    IEmployeeRepository *repository ;
    EmployeeServices( IEmployeeRepository *repository);
    void addEmployee(Employee &employee) override;
    void removeEmployee(int id) override;
    void updateEmployee(int id , Employee &employee) override;

    vector<Employee>getAllemployees() override;
};

#endif
