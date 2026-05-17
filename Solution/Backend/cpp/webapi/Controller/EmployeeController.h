#ifndef EMPLOYEE_CONTROLLER_H
#define EMPLOYEE_CONTROLLER_H

#include "../httplib.h"
#include "../services/EmployeeServices.h"

using namespace httplib;

class EmployeeController {
public:
    EmployeeController(EmployeeServices& service);

    void getAllEmployees(const Request& req, Response& res);
    void addEmployee(const Request& req, Response& res);
    void deleteEmployee(const Request& req, Response& res);
    void updateEmployee(const Request& req, Response& res);

private:
    EmployeeServices& empService;
};

#endif
