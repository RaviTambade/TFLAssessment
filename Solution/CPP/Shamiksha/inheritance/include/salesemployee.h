#ifndef SALESEMPLOYEE_H
#define SALESEMPLOYEE_H
#include <string>
# include "../include/employee.h"

using namespace std; 
class salesEmployee : public Employee {
    protected :

        int target ;
        double insentive ;

    public :
        //constructor
        salesEmployee();
        //parameriesed constructor
        salesEmployee(int empid, string empname,double empsalary, int emptarget , double empinsentive );

        void displayInfo()override;

        //destructor
        ~salesEmployee();

};

#endif