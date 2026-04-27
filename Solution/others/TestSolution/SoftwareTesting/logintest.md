 an example of a .NET Core unit test for a login functionality using NUnit, testing framework:

First, let's create a simple `LoginService` class with a `Login` method:

```csharp
public class LoginService
{
    public bool Login(string username, string password)
    {
        // Assume some logic here to validate the username and password
        // For simplicity, let's say it returns true if both are "admin"
        return (username == "admin" && password == "admin");
    }
}
```

Now, let's write NUnit test cases for this `LoginService`:

```csharp
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
```

In this example:

- The `Login_ValidCredentials_ReturnsTrue` test method verifies that the `Login` method returns `true` for valid credentials.
- The `Login_VariousCredentials_ReturnsExpected` test method uses NUnit's `TestCase` attribute to provide multiple sets of credentials for testing, checking if the `Login` method behaves as expected for both valid and invalid credentials.

Ensure you have NUnit and its dependencies installed in your project to run these tests. You can install NUnit via NuGet package manager in Visual Studio or via the dotnet CLI.