namespace Authentication;
using System;
public class LoginService
{
    public bool Login(string username, string password)
    {
        // Assume some logic here to validate the username and password
        // For simplicity, let's say it returns true if both are "admin"
        bool status=false;
        if(username == "admin" && password == "admin"){
            status=true;
        }
       return status;
    }
}
