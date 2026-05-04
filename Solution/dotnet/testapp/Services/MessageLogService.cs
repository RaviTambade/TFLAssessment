namespace backend.Services;

using System.Text.Json;
using backend.Models;

public class MessageLogService : IMessageLogService
{
    private readonly string _filePath;
    private readonly object _lock = new object();

    public MessageLogService(string filePath = "messagelog.json")
    {
        _filePath = filePath;

        // Ensure file exists
        if (!File.Exists(_filePath))
        {
            File.WriteAllText(_filePath, "[]");
        }
    }

    public async Task LogMessageAsync(Message message)
    {
        if (message == null)
            throw new ArgumentNullException(nameof(message));

        message.DateTime = DateTime.UtcNow;

        lock (_lock) // thread-safe
        {
            var json = File.ReadAllText(_filePath);

            var messages = JsonSerializer.Deserialize<List<Message>>(json)
                           ?? new List<Message>();

            messages.Add(message);

            var updatedJson = JsonSerializer.Serialize(messages, new JsonSerializerOptions
            {
                WriteIndented = true
            });

            File.WriteAllText(_filePath, updatedJson);
        }

        await Task.CompletedTask;
    }

    public async Task<List<Message>> GetAllMessagesAsync()
    {
        var json = await File.ReadAllTextAsync(_filePath);

        return JsonSerializer.Deserialize<List<Message>>(json)
               ?? new List<Message>();
    }
}