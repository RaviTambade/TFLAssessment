namespace backend.Services.Interfaces
{
    public interface IEmailService
    {
        void SendEmail(string toEmail, string password);
    }
}
