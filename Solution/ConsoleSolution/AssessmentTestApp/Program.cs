using HR.Entities;
using HR.Repositories.Managers.Dbs;
using HR.Services;
using HR.Services.Interfaces;
using MySql.Data.MySqlClient;
using Mysqlx.Crud;

//Main Entrypoint

//IEmployeeService iSvc=new EmployeeService();
MySqlDbManager dbManager = new MySqlDbManager();
List<Employee> allEmployees=dbManager.GetAll();

foreach( Employee emp in allEmployees){
    Console.WriteLine(emp.Id + " "+ emp.Fname+ " "+ emp.Lname+" "+emp.ContactNo+" "+emp.Email);
}

MySqlDbSkill dbSkill = new MySqlDbSkill();
List<Skill> skills = dbSkill.GetAll();

foreach(Skill skill in skills){
    Console.WriteLine(skill.SkillId+ " "+ skill.Title);
}
/*
Console.WriteLine("_________________________________________");
Console.WriteLine("Enter the Id of employee which you want to update : ");
int ID = int.Parse(Console.ReadLine().ToString());
Console.WriteLine("Enter the new name of employee which you want to update : ");
allEmployees[ID-1].Fname = Console.ReadLine();
bool status = dbManager.Update(allEmployees[ID-1]);
if (status == true){
    Console.WriteLine("employee is updated...");
}else{
    Console.WriteLine("no changes...");
    }
    Console.WriteLine("_________________________________________");
 
Console.WriteLine("Enter the first name of new employee : ");
string fname = Console.ReadLine();
Console.WriteLine("Enter the last name of new employee : ");
string lname = Console.ReadLine();
Console.WriteLine("Enter the contact number of new employee : ");
string contact = Console.ReadLine();
Console.WriteLine("Enter the email of new employee : ");
string email = Console.ReadLine();

Employee addEmployee = new Employee();
addEmployee.Fname= fname;
addEmployee.Lname= lname;
addEmployee.Email = email;
addEmployee.ContactNo= contact;

MySqlDbManager mySqlDbManager = new MySqlDbManager();
mySqlDbManager.Insert(addEmployee); */

Console.WriteLine("Enter employee id to delete record : ");
int empId = int.Parse(Console.ReadLine());

dbManager.Delete(empId);















/*
IFeedbackService iFvc = new FeedbackService();
List<Feedback> allFeedback = iFvc.GetAll();

foreach(Feedback fdk in allFeedback){
    Console.WriteLine(fdk.feedbackId+ " "+ fdk.feedback);
}
*/