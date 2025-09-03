# include <iostream>
# include <string>  
# include "../include/employee.h"

int main() {
    string name1="Alice";
    string name2="Bob";
    
    Employee emp1(101, name1, 75000.0);
    Employee emp2(102, name2, 85000.0);

    emp1.displayInfo();
    emp2.displayInfo();

    return 0;
}   