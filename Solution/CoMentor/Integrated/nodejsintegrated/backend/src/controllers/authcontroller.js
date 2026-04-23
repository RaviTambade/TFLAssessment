const ChangePasswordDto = require("../dtos/requests/changepassworddto");
const Credential = require("../dtos/requests/credential");
const UserRequest = require("../dtos/requests/userrequest");

const Generator = require("../helpers/ResponseGenerator");
class AuthController {
 
  constructor(authService) {
    this.authService = authService;
  }


  // Callbacks for service responses
  onValidate=(err, result) => {
      Generator.generateResponse(err, result, "Invalid credentials", "Validation successful");
  }

  onChangePassword=(err, result) => {
      Generator.generateResponse(err, result, "Failed to change password", "Password changed successfully");
  }

  onRegister=(err, result) => {
      Generator.generateResponse(err, result, "Failed to register user", "User registered successfully");
  } 
  

  // Controller methods (Action method)
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

module.exports = AuthController;