const Credential = require("../dtos/requests/credential");
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
}

module.exports = AuthenticationController;
