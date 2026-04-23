const ChangePasswordDto = require("../dtos/requests/changepassworddto");
const Credential = require("../dtos/requests/credential");
const UserRequest = require("../dtos/requests/userrequest");

class Auth {

  //ravi Changes
  
  //constructor dependency injection for authService
  constructor(authService) {
    //self reference
    //this keyword is used to refer to the current instance of the class and
    // allows us to access the properties and methods of the class within its scope. By assigning the passed authService parameter to this.authService, we can use this.authService to call methods defined in the authService throughout the Auth class.
    this.authService = authService;
  }

    onValidate=(err, result) => {
      if (err) {
        return res.status(500).json({ error: "intternal server error" });
      }

      if (result.status) {
        res.json(result);
      } else {
        res.status(404).json({ message: "No data found" });
      }
    }

    onChangePassword=(err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "failed to change password" });
      }

      if(result.affectedRows>0)
      {
      return res.status(200).json({ message: "password change sucessfully"});
      }
      else
      {
         return res.status(500).json({ message: "failed to change password" });
      }
    }

    onRegister=(err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: "Failed to register user" });
      } else {
        res.status(200).json({ message: "User registered successfully" });
      }
    }


  validate = (req, res) => {
    const credential = new Credential(req.body.username,req.body.password,req.body.role  );
    this.authService.validate(credential, onValidate);
  };

  register(req, res) {
    const user = new UserRequest(req.body.firstName,req.body.lastName,req.body.email,req.body.password,req.body.contact );
    this.authService.register(user, onRegister);
  }

   changePassword(req, res) {

    const changePassword =new ChangePasswordDto(req.body.id, req.body.oldPassword, req.body.newPassword);
    if (!changePassword.id || !changePassword.oldPassword || !changePassword.newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    this.authService.changePassword(changePassword, onChangePassword);
  }
}

module.exports = Auth;