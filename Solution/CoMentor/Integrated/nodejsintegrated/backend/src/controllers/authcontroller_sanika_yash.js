const Credential = require("../dtos/requests/credential");
const UserRequest = require("../dtos/requests/userrequest");

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  validate = (req, res) => {
    const credentialCheck = new Credential(
      req.body.username,
      req.body.password,
      req.body.role,
    );

    this.authService.validate(credentialCheck, (err, result) => {
      if (err) {
        console.error("error fetching users:", err);
        return res.status(500).json({ error: "intternal server error" });
      }

      if (result.status) {
        res.json(result);
      } else {
        res.status(404).json({ message: "No data found" });
      }
    });
  };

  register(req, res) {
    const user = new UserRequest(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password,
      req.body.contact,
    );
    this.authService.register(user, (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: "Failed to register user" });
      } else {
        res.status(200).json({ message: "User registered successfully" });
      }
    });
  }
}

module.exports = AuthController;
