class UserLogController {
  constructor(userLogService) {
    this.userLogService = userLogService;
  }

  logUserLogin = (req, res) => {
    const userid = req.params.userid;
    this.userLogService.logUserLogin(userid, (err, result) => {
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "log inserted sucessfully" });
        console.log("log inserted sucessfully");
      } else {
        res.status.json({ message: "log not inserted" });
      }
    });
  };

  logUserLogout = (req, res) => {
    const userid = req.params.userid;
    this.userLogService.logUserLogout(userid, (err, result) => {
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "log inserted sucessfully" });
        console.log("log inserted sucessfully");
      } else {
        res.status.json({ message: "log not inserted" });
      }
    });
  };
}

module.exports = UserLogController;