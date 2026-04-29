const ChangePasswordDto = require("../dtos/requests/changepassworddto");
const Credential = require("../dtos/requests/credential");
const UserRequest = require("../dtos/requests/userrequest");
const LoginStatsResponseDto = require("../dtos/responses/loggerlogin-statsresponsedto");
const LoginStatus = require("../dtos/responses/loginstatus");
const ResponseGenerator = require("../helpers/ResponseGenerator");

class AuthController {
  constructor(authService) {
    this.service = authService;
  }


  validate(req, res) {
    const responseGenerator = new ResponseGenerator();
    const credential = new Credential(
      req.body.username,
      req.body.password,
      req.body.role,
    );
    this.service.validate(credential, (err, result) => {
      if (err) {
        return responseGenerator.sendError(res, "Server error", 500, err);
      }

      const isValid = Array.isArray(result) && result.length > 0;

      const loginStatus = new LoginStatus(
        isValid,
        isValid ? "login successfully" : "login failed",
        isValid ? result[0].id : 0,
      );

      if (isValid) {
        return responseGenerator.sendSuccess(
          res,
          loginStatus,
          200,
          "Validation successful",
        );
      } else {
        return responseGenerator.sendError(res, "Invalid credentials", 401);
      }
    });
  };

  register(req, res) {
    const responseGenerator = new ResponseGenerator();
    const user = new UserRequest(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password,
      req.body.contact,
    );
    this.service.register(user, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to register user",
        "User registered successfully",
      );
    });
  }

  changePassword(req, res) {
    const { id, newPassword } = req.body;

    if (!id || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "User ID and new password required"
      });
    }

    this.service.changePassword({ id, newPassword }, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Server error"
        });
      }

      if (!result) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }

      res.json({
        success: true,
        message: "Password updated successfully"
      });
    });
  }
}

module.exports = AuthController;
