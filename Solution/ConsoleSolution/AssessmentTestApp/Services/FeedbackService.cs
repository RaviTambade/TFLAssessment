using HR.Entities;
using HR.Services.Interfaces;
using HR.Repositories.Interfaces;
using HR.Repositories.Managers.Dbs;
    
namespace HR.Services;

public class FeedbackService:IFeedbackService{

     public List<Feedback> GetAll(){
        List<Feedback> feedbacks=new List<Feedback>();
        IFeedback fdk=new MySqlDbFeedback();
        feedbacks=fdk.GetAll();
        return feedbacks;
     }
}