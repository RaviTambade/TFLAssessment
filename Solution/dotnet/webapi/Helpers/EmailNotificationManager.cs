namespace backend.Helpers;

using System.Net;
using System.Net.Mail;

public class NotificationManager : INotificationManager
{
    private readonly EmailSettings _emailSettings;

    public NotificationManager(EmailSettings emailSettings)
    {
        _emailSettings = emailSettings;
    }

    public async Task SendEmailAsync(string to, string subject, string content)
    {
        if (string.IsNullOrWhiteSpace(to))
            throw new ArgumentException("Recipient email cannot be empty");

        using (var client = new SmtpClient(_emailSettings.SmtpServer, _emailSettings.Port))
        {
            client.Credentials = new NetworkCredential(
                _emailSettings.Username,
                _emailSettings.Password);

            client.EnableSsl = _emailSettings.EnableSsl;

            var mailMessage = new MailMessage
            {
                From = new MailAddress(_emailSettings.SenderEmail, _emailSettings.SenderName),
                Subject = subject,
                Body = content,
                IsBodyHtml = true
            };

            mailMessage.To.Add(to);

            try
            {
                await client.SendMailAsync(mailMessage);
            }
            catch (Exception ex)
            {
                // Log this properly (Serilog/NLog/etc.)
                throw new Exception("Email sending failed", ex);
            }
        }
    }
}