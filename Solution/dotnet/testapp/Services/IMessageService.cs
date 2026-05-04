namespace backend.Services;

using backend.Models;

public interface IMessageLogService
{
    Task LogMessageAsync(Message message);
    Task<List<Message>> GetAllMessagesAsync();
}