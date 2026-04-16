class userLoginController {
  constructor(userLoginService) {
    this.userLoginService = userLoginService;
  }

  userLogin = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;

    this.userLoginService.userLogin(username, password, role, (err, result) => {
      if (err) {
        console.error("error fetching users:", err);
        return res.status(500).json({ error: "intternal server error" });
      }

     if (result && result.length > 0) {
       res.json(result);
     } else {
       res.status(404).json({ message: "No data found" });
     }
    });
  };
}

module.exports = userLoginController;
