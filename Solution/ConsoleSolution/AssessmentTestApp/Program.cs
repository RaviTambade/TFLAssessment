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

Employee emp1 = new Employee();
emp1.Fname= "Ram";
bool status = dbManager.Update(emp1);
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