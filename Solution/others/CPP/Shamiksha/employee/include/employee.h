#ifndef EMPLOYEE_H
#define EMPLOYEE_H
#include <string>
using namespace std; 

class Employee {
private:
    int id;
    string name;
    double salary;

public:
    Employee();
    Employee(int empId,string& empName,  double empSalary);
    virtual void displayInfo();
    ~Employee(); 
};
#endif // EMPLOYEE_H