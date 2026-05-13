#ifndef ENTITY_EMPLOYEE_H
#define ENTITY_EMPLOYEE_H

#include <string>
using namespace std;
class Employee {

    public : 
             static int count;
             static int getCount() {
                return count;
             }
    private :
        int id;
        string name;
        double salary;
        int experience; 
        int age;


    public :
    Employee(){
        Employee::count++;
    }

    Employee(int id , string name , double salary , int experience , int age) {
        this->id = id;
        this->name = name;
        this->salary = salary;
        this->experience = experience;
        this->age = age;
        Employee::count++;
    }

    ~Employee(){
        Employee::count--;
        
    }
};
#endif