using HR.Entities;

namespace HR.Services.Interfaces;
public interface IFeedbackService{
   // public string AddFeedback(Feedback f1);

     public List<Feedback> GetAll();
}