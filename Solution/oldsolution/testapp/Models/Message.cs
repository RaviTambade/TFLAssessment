using System.Text.Json.Serialization;

namespace backend.Models;

public class Message
{
    public string To { get; set; }

    public string From { get; set; }

    public DateTime DateTime { get; set; }

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public MessageType Type { get; set; }

    public string Subject { get; set; }

    public string Content { get; set; }
}