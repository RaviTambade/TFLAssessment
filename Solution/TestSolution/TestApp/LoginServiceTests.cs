using Authentication;

namespace TestApp;

using NUnit.Framework;

[TestFixture]
public class LoginServiceTests
{
    private LoginService _loginService;

    [SetUp]
    public void Setup()
    {
        _loginService = new LoginService();
    }

    [Test]
    public void Login_ValidCredentials_ReturnsTrue()
    {
        // Arrange
        string validUsername = "admin";
        string validPassword = "admin";

        // Act
        bool result = _loginService.Login(validUsername, validPassword);

        // Assert
        Assert.IsTrue(result);
    }

    [TestCase("admin", "admin")] // Valid credentials
    [TestCase("user", "pass")]   // Invalid credentials
    [TestCase("admin", "pass")]  // Invalid credentials
    [TestCase("user", "admin")]  // Invalid credentials
    public void Login_VariousCredentials_ReturnsExpected(string username, string password)
    {
        // Act
        bool result = _loginService.Login(username, password);

        // Assert
        if (username == "admin" && password == "admin")
        {
            Assert.IsTrue(result);
        }
        else
        {
            Assert.IsFalse(result);
        }
    }
}
