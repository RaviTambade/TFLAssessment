#include "EmployeeRouter.h"

Router::Router(EmployeeController& controller) : controller(controller) {}

void Router::setupRoutes(Server& svr) {
    svr.Get("/api/Employees", [this](const Request& req, Response& res) {
        controller.getAllEmployees(req, res);
    });

    svr.Post("/api/Employee/add", [this](const Request& req, Response& res) {
        controller.addEmployee(req, res);
    });

    svr.Delete("/api/Employee/delete", [this](const Request& req, Response& res) {
        controller.deleteEmployee(req, res);
    });

    svr.Put("/api/Employee/update", [this](const Request& req, Response& res) {
        controller.updateEmployee(req, res);
    });
}
