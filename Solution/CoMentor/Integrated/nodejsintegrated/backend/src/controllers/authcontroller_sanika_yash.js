const Credential = require("../dtos/requests/credential");
const UserRequest = require("../dtos/requests/userrequest");

class AuthenticationController {
  constructor(authenticationService) {
    this.authenticationService = authenticationService;
  }

  userLogin = (req, res) => {
    const credentialCheck = new Credential(
      req.body.username,
      req.body.password,
      req.body.role,
    );

    this.authenticationService.validate(credentialCheck, (err, result) => {
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

  InsertUser(req, res) {
    const user = new UserRequest(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password,
      req.body.contact,
    );
    this.authenticationService.InsertUser(user, (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: "Failed to register user" });
      } else {
        res.status(200).json({ message: "User registered successfully" });
      }
    });
  }
}

module.exports = AuthenticationController;
