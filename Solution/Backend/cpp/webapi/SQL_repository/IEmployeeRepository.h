#include "../entitity/employee.h"
#include "../Database/connection.h"
#include<vector>

#ifndef IEMPLOYEEREPOSITORY_H
#define IEMPLOYEEREPOSITORY_H

class IEmployeeRepository{
    public :

        // Pure virtual function
        virtual ~IEmployeeRepository()=default;
        virtual bool add(Employee &employee)=0;
        virtual bool update (int id , Employee &employee )=0;
        virtual void remove(int id )=0;
        virtual vector<Employee> getAllEmployees() = 0;
};
#endif