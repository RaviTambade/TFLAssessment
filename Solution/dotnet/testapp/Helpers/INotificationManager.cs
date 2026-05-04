namespace backend.Helpers;
public interface INotificationManager
    {
         public  Task SendMessageAsync(string to, string subject, string content);
  
    }
 