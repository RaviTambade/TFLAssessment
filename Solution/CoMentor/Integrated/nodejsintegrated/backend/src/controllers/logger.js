const LoginStatsResponseDto = require("../dtos/responses/loggerlogin-statsresponsedto");
const AvgSessionResponseDto = require("../dtos/responses/loggeravg-sessionresponsedto");
const ActiveSessionsResponseDto = require("../dtos/responses/loggeractive-sessionsresponsedto");
const ActiveUsersResponseDto = require("../dtos/responses/loggeractive-usersresponsedto");

class Logger {
  constructor(Logger) {
    this.Logger = Logger;
  }

  LoginEntry = (req, res) => {
    const userid = req.params.userid;
    this.Logger.LoginEntry(userid, (err, result) => {
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
    this.Logger.LogoutEntry(userid, (err, result) => {
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "log inserted sucessfully" });
        console.log("log inserted sucessfully");
      } else {
        res.status.json({ message: "log not inserted" });
      }
    });
  };

  getLoginsLast24Hrs = (req, res) => {
    this.Logger.getLoginStats((err, data) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      res.json([
        { totalLogins24h: data?.totalLogins24h || 0 }
      ]);
    });
  };

  getAvgSessionTime = (req, res) => {
    this.Logger.getAverageSessionTime((err, data) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      res.json(new AvgSessionResponseDto(data));
    });
  };

  getActiveSessions = (req, res) => {
    this.Logger.getActiveSessions((err, data) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      res.json([
        { activeSessions: data?.activeSessions || 0 }
      ]);
    });
  }; 

  getActiveUsers = (req, res) => {
    this.Logger.getActiveUsers((err, data) => {
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

  getSessionLogs = (req, res) => {
    console.log("In Controller");

    const filters = new SessionRequestDto(req.query);

    this.Logger.getSessionLogs(filters.name, (err, logs) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message || "Unable to fetch session logs",
        });
      }

      if (filters.name && logs.length === 0) {
        return res.status(404).json({
          success: false,
          message: "NOT FOUND",
        });
      }

      res.status(200).json({
        success: true,
        data: logs,
      });
    });
  };

}

module.exports = Logger;