#ifndef IEMPLOYEESERVICES_H
#define IEMPLOYEESERVICES_H
#include "../SQL_repository/EmployeeRepository.h"
class IEmployeeServices
{

public:
    virtual ~IEmployeeServices()=default;
    virtual void addEmployee(Employee &employee)=0;
    virtual void removeEmployee(int id)=0;
    virtual void updateEmployee(int id , Employee &employee)=0;
    
    virtual vector<Employee> getAllemployees()=0;
};

#endif

