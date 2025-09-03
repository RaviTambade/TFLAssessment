#ifndef EMPLOYEE_H
#define EMPLOYEE_H
#include <string>
using namespace std; 

class Employee {
protected:
    int id;
    string name;
    double salary;

public:
    //constructor
    Employee();

    //parametrised constructor
    Employee(int empId,string& empName,  double empSalary);

    //function
    virtual void displayInfo();

   //destructor 
    ~Employee(); 
};
#endif // EMPLOYEE_H
