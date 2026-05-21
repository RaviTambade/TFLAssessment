#ifndef EMPLOYEEREPOSITORY_H
#define EMPLOYEEREPOSITORY_H

#include "../entitity/employee.h"
#include "../Database/connection.h"
#include "IEmployeeRepository.h"


class EmployeeRepository : public IEmployeeRepository{
    public :
        bool add(Employee &employee) override;
        bool update (int id , Employee &employee ) override;
        void remove(int id ) override;
        vector<Employee> getAllEmployees() override;
};
#endif