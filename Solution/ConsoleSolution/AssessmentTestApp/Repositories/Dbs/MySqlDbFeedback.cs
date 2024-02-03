using HR.Entities;
using HR.Repositories.Interfaces;
namespace HR.Repositories.Managers.Dbs;

public class MySqlDbFeedback:IFeedback{

    public List<Feedback> GetAll(){
//data base code for fetching all Employees

List<Feedback> feedbacks=new List<Feedback>();
        Feedback fed=new Feedback();
        fed.feedbackId=125;
        fed.feedback="good";
       
        feedbacks.Add(fed);

       Feedback fed1=new Feedback();
        fed1.feedbackId=145;
        fed1.feedback="bad";
       
        feedbacks.Add(fed1);
        //Data Access code 
        //Get all employees from table
        //Create list of employees from fetched data
        //send list of employees.

        return feedbacks; 

}


}