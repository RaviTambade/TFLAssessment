using HR.Entities;

namespace HR.Repositories.Interfaces;

public interface IFeedback{

  //  public string AddFeedback(Feedback f1);

     public List<Feedback> GetAll();
    
}