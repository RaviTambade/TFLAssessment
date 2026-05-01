namespace backend.Services.Interfaces
{
    public interface IPasswordService
    {
        string GeneratePassword(string email);
        bool VerifyPassword(string email, string password);
    }
}
