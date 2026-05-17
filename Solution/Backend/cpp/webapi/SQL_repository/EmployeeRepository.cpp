#include ".\EmployeeRepository.h"
#include <vector>
#include<algorithm>
#include <string>
#include"../database/connection.h"


using namespace std ;

bool EmployeeRepository :: add(Employee &emp){
    char query[512] ;
     dbmanager db;
        MYSQL* conn= db.getConnection();
        sprintf(query , "INSERT INTO employees(id , name , salary , experience , age )VALUES( %d, '%s', %2f, %d,%d)",
        emp.id , emp.name.c_str() , emp.salary, emp.experience, emp.age);
        if (mysql_query(conn, query))
            {
                cerr << "Insert query failed. Error: " << mysql_error(conn) << "\n";
                return false;
            }
        return true;
}

bool EmployeeRepository :: update (int id , Employee &emp ){
    char query[512] ;
       dbmanager db;
        MYSQL* conn= db.getConnection();
        snprintf(query ,sizeof(query),  "UPDATE employees SET  name='%s' , salary=%2f , experience=%d , age =%d WHERE id =%d",
      emp.name.c_str() , emp.salary, emp.experience, emp.age,emp.id);
       if (mysql_query(conn, query))
        {
            cerr << "update query failed. Error: " << mysql_error(conn) << "\n";
            return false;
        }
        return true;
}

void EmployeeRepository :: remove(int id ){
    char query[256];
       dbmanager db;
        MYSQL* conn= db.getConnection();
        sprintf(query, "DELETE FROM employees WHERE id=%d", id);
        if (mysql_query(conn, query))
        {
            cerr << "Delete query failed. Error: " << mysql_error(conn) << "\n";
        }
}

vector<Employee> EmployeeRepository ::getAllEmployees(){
    vector <Employee> employees;
   dbmanager db;
        MYSQL* conn= db.getConnection();
    MYSQL_RES *res ;
    MYSQL_ROW row ;

   
    if (mysql_query(conn, "SELECT id, name, salary, experience, age FROM employees")) {
        std::cerr << "SELECT query failed. Error: " << mysql_error(conn) << "\n";
        return employees; // return empty
    }
     res = mysql_store_result(conn);
    if (res == NULL) 
        {
            cerr << "mysql_store_result() failed. Error: " << mysql_error(conn) << "\n";
             return employees; 
            
        }
    while ((row = mysql_fetch_row(res))!= NULL)
        {
                Employee emp (stoi(row[0]),row[1],stod(row[2]),stoi(row[3]),stoi(row[4]));
                employees.push_back(emp);

        }
     mysql_free_result(res);
     return employees;
    }