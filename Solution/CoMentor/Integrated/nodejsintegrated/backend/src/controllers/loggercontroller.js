const LoginStatsResponseDto = require("../dtos/responses/loggerlogin-statsresponsedto");
const AvgSessionResponseDto = require("../dtos/responses/loggeravg-sessionresponsedto");
const ActiveSessionsResponseDto = require("../dtos/responses/loggeractive-sessionsresponsedto");
const ActiveUsersResponseDto = require("../dtos/responses/loggeractive-usersresponsedto");

class LoggerController {
  constructor(LoggerService) {
    this.LoggerService = LoggerService;
  }

  LoginEntry = (req, res) => {
    const userid = req.params.userid;
    this.LoggerService.LoginEntry(userid, (err, result) => {
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "log inserted sucessfully" });
        console.log("log inserted sucessfully");
      } else {
        res.status.json({ message: "log not inserted" });
      }
    });
  };

  LogoutEntry = (req, res) => {
    const userid = req.params.userid;
    this.LoggerService.LogoutEntry(userid, (err, result) => {
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "log inserted sucessfully" });
        console.log("log inserted sucessfully");
      } else {
        res.status.json({ message: "log not inserted" });
      }
    });
  };

  getLoginsLast24Hrs = (req, res) => {
    this.LoggerService.getLoginStats((err, data) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      res.json([
        { totalLogins24h: data?.totalLogins24h || 0 }
      ]);
    });
  };

  getAvgSessionTime = (req, res) => {
    this.LoggerService.getAverageSessionTime((err, data) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      res.json(new AvgSessionResponseDto(data));
    });
  };

  getActiveSessions = (req, res) => {
    this.LoggerService.getActiveSessions((err, data) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      res.json([
        { activeSessions: data?.activeSessions || 0 }
      ]);
    });
  }; 

  getActiveUsers = (req, res) => {
    this.LoggerService.getActiveUsers((err, data) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      const formatted = data.map(user => ({
        full_name: user.full_name,
        login_time: user.login_time,
        status: "ACTIVE"
      }));

      res.json(formatted);
    });
  };
}

module.exports = LoggerController;