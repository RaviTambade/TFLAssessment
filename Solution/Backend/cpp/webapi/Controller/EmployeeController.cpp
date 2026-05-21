#include "EmployeeController.h"
#include <string>
#include <vector>

/*EmployeeController::EmployeeController(EmployeeServices& service): 
{
    empService = service;                                  
}*/


EmployeeController::EmployeeController(EmployeeServices& service) : empService(service) {}
void EmployeeController::getAllEmployees(const Request& req, Response& res) {
    vector<Employee> employees = empService.getAllemployees();

    string json = "[";
    for (const auto& employee : employees) {
        json += "{\"id\":" + to_string(employee.id) +
                ",\"name\":\"" + employee.name +
                "\",\"Salary\":" + to_string(employee.salary) + "},";
    }
    if (!employees.empty()) json.pop_back();
    json += "]";
    res.set_content(json, "application/json");
}

void EmployeeController::addEmployee(const Request& req, Response& res) {
    auto id = req.get_param_value("id");
    auto name = req.get_param_value("name");
    auto salary = req.get_param_value("salary");
    auto experience = req.get_param_value("experience");
    auto age = req.get_param_value("age");

    Employee emp(stoi(id), name, stod(salary), stoi(experience), stoi(age));
    empService.addEmployee(emp);

    res.set_content("Employee added: " + emp.name, "text/plain");
}

void EmployeeController::deleteEmployee(const Request& req, Response& res) {
    auto id = req.get_param_value("id");
    empService.removeEmployee(stoi(id));
    res.set_content("Employee deleted: " + id, "text/plain");
}

void EmployeeController::updateEmployee(const Request& req, Response& res) {
    auto id = req.get_param_value("id");
    auto name = req.get_param_value("name");
    auto salary = req.get_param_value("salary");
    auto experience = req.get_param_value("experience");
    auto age = req.get_param_value("age");

    Employee emp(stoi(id), name, stod(salary), stoi(experience), stoi(age));
    empService.updateEmployee(stoi(id), emp);

    res.set_content("Employee updated: " + emp.name, "text/plain");
}
