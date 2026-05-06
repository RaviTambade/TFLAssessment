namespace backend.Settings;

public class SMSSettings
{
    public string Provider { get; set; } // Twilio, Fast2SMS, AWS

    public string ApiBaseUrl { get; set; }

    public string ApiKey { get; set; }
    public string ApiSecret { get; set; }

    public string SenderId { get; set; }

    public string DefaultCountryCode { get; set; } = "+91";

    public bool IsEnabled { get; set; } = true;
}