namespace backend.Helpers;
public interface INotificationManager
    {
        void SendEmail(string toEmail, string passphrase);
    }
 