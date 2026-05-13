#ifndef EMPLOYEEROUTER_H
#define EMPLOYEEROUTER_H

#include "../httplib.h"
#include "../Controller/EmployeeController.h"

using namespace httplib;

class Router {
public:
    Router(EmployeeController& controller);
    void setupRoutes(Server& svr);

private:
    EmployeeController& controller;
};

#endif
