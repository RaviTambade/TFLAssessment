using HR.Entities;
using HR.Repositories.Managers.Dbs;
using HR.Services;
using HR.Services.Interfaces;

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
IFeedbackService iFvc = new FeedbackService();
List<Feedback> allFeedback = iFvc.GetAll();

foreach(Feedback fdk in allFeedback){
    Console.WriteLine(fdk.feedbackId+ " "+ fdk.feedback);
}
*/