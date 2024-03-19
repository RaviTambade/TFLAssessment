namespace Authentication;

using System;

public class LoginService
{
    public bool Login(string username, string password)
    {
        // Assume some logic here to validate the username and password
        // For simplicity, let's say it returns true if both are "admin"
        return (username == "admin" && password == "admin");
    }
}
