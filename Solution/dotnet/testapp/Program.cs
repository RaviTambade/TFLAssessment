using backend.Helpers;
using backend.Settings;

using backend.Models;
using backend.Services;

var emailSettings = new EmailSettings
{
    SmtpServer = "smtp.gmail.com",
    Port = 587,
    SenderEmail = "your@email.com",
    SenderName = "TFL Mentor",
    Username = "your@email.com",
    Password = "password",
    EnableSsl = true
};

INotificationManager notificationManager = new EmailNotificationManager(emailSettings);

await notificationManager.SendMessageAsync(
    "student@email.com",
    "Welcome to TFL Mentor",
    "<h1>Hello Student</h1><p>Your journey starts here.</p>");


var logService = new MessageLogService();

await logService.LogMessageAsync(new Message
{
    To = "student@example.com",
    From = "noreply@tflmentor.com",
    Type = MessageType.Email,
    Subject = "Welcome",
    Content = "Welcome to TFL Mentor!"
});
