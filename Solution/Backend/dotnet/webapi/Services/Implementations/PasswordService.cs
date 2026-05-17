using backend.Models;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;

namespace backend.Services
{
    public class PasswordService : IPasswordService
    {
        private static Dictionary<string, PasswordEntry> passwordStore = new();

        public string GeneratePassword(string email)
        {
            string password = CreateStrongPassword(8);

            passwordStore[email] = new PasswordEntry
            {
                Password = password,
                ExpiryTime = DateTime.UtcNow.AddDays(5)
            };

            return password;
        }

        public bool VerifyPassword(string email, string password)
        {
            if (!passwordStore.ContainsKey(email))
                return false;

            var entry = passwordStore[email];

            // Check expiry
            if (DateTime.UtcNow > entry.ExpiryTime)
            {
                passwordStore.Remove(email);
                return false;
            }

            if (entry.Password == password)
            {
                return true;
            }

            return false;
        }

        private string CreateStrongPassword(int length)
        {
            const string upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const string lower = "abcdefghijklmnopqrstuvwxyz";
            const string number = "0123456789";
            const string symbol = "@#$%&*!?";
            string allChars = upper + lower + number + symbol;

            Random random = new Random();
            List<char> password = new List<char>();

            // Ensure at least one from each category
            password.Add(upper[random.Next(upper.Length)]);
            password.Add(lower[random.Next(lower.Length)]);
            password.Add(number[random.Next(number.Length)]);
            password.Add(symbol[random.Next(symbol.Length)]);

            // Fill remaining characters
            for (int i = password.Count; i < length; i++)
            {
                password.Add(allChars[random.Next(allChars.Length)]);
            }

            // Shuffle password
            return new string(password.OrderBy(x => random.Next()).ToArray());
        }
    }
}