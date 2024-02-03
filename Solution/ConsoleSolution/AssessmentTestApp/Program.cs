using HR.Entities;
using HR.Services;
using HR.Services.Interfaces;

//Main Entrypoint

IEmployeeService iSvc=new EmployeeService();

List<Employee> allEmployees=iSvc.GetAll();


foreach( Employee emp in allEmployees){
    Console.WriteLine(emp.id + " "+ emp.fname+ " "+ emp.lname);
}