
# include "../include/employee.h"
#include<string>
#include <iostream>


using namespace std;


//implementation of Employee class methods

Employee::Employee(){

    id = 0;
    name = "";
    salary = 0.0;
}

Employee::Employee( int empId, string& empName, double empSalary) {
    id = empId;
    name = empName;
    salary = empSalary;
}


void Employee::displayInfo() {
    cout << "Employee ID: " << id << endl;
    cout << "Name: " << name << endl;
    cout << "Salary: $" << salary << endl;
}

Employee::~Employee() {
    // Destructor implementation (if needed)
    cout << "Employee object with ID " << id << " is being destroyed." << endl;
}