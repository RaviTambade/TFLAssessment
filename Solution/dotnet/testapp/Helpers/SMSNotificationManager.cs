using backend.Settings;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;
namespace backend.Helpers;

using System.Net;
using System.Net.Mail;

public class SMSNotificationManager : INotificationManager
{
    private readonly SMSSettings _settings;

    public SMSNotificationManager(SMSSettings settings)
    {
        _settings = settings;

        if (_settings.IsEnabled)
        {
           // TwilioClient.Init(_settings.AccountSid, _settings.AuthToken);
        }
    }

    public async Task SendMessageAsync(string to, string subject, string content)
    {
        if (!_settings.IsEnabled)
            return;

        if (string.IsNullOrWhiteSpace(to))
            throw new ArgumentException("Recipient phone number is required");

        var result = await MessageResource.CreateAsync(
            to: new PhoneNumber(to),
          //  from: new PhoneNumber(_settings.FromPhoneNumber),
            body: content
        );

        // Optional: you can log result.Sid
    }

}