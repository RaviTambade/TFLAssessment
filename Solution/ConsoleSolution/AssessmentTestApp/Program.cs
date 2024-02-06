using HR.Entities;
using HR.Repositories.Managers.Dbs;
using HR.Services;
using HR.Services.Interfaces;
using MySql.Data.MySqlClient;

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

Console.WriteLine();
Console.WriteLine("Enter the Id of employee which you want to update : ");
int ID = int.Parse(Console.ReadLine().ToString());
Console.WriteLine("Enter the new name of employee which you want to update : ");
allEmployees[ID-1].Fname = Console.ReadLine().ToString();
bool status = dbManager.Update(allEmployees[ID-1]);
if (status == true){
    Console.WriteLine("employee is updated...");
}else{
    Console.WriteLine("no changes...");
    }

/*
IFeedbackService iFvc = new FeedbackService();
List<Feedback> allFeedback = iFvc.GetAll();

foreach(Feedback fdk in allFeedback){
    Console.WriteLine(fdk.feedbackId+ " "+ fdk.feedback);
}
*/