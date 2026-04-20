const LoginStatsResponseDto = require("../dtos/responses/login-statsresponsedto");
const AvgSessionResponseDto = require("../dtos/responses/avg-sessionresponsedto");
const ActiveSessionsResponseDto = require("../dtos/responses/active-sessionsresponsedto");
const ActiveUsersResponseDto = require("../dtos/responses/active-usersresponsedto");

//Samruddhi
const SessionRequestDto = require("../dtos/requests/sessionrequestdto");

class SessionController {
  constructor(service) {
    this.service = service;
  }

  getLoginsLast24Hrs = async (req, res) => {
    try {
      const data = await this.service.getLoginStats();
      res.json([
        { totalLogins24h: data?.totalLogins24h || 0 }
      ]);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  getAvgSessionTime = async (req, res) => {
    try {
      const data = await this.service.getAverageSessionTime();
      res.json(new AvgSessionResponseDto(data));
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  getActiveSessions = async (req, res) => {
    try {
      const data = await this.service.getActiveSessions();
      res.json([
        { activeSessions: data?.activeSessions || 0 }
      ]);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  getActiveUsers = async (req, res) => {
    try {
      const data = await this.service.getActiveUsers();
      const formatted = data.map(user => ({
        full_name: user.full_name,
        login_time: user.login_time,
        status: "ACTIVE"
      }));
      res.json([formatted]); // ⚠️ DOUBLE ARRAY (IMPORTANT)
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  //Samruddhi
  getSessionLogs = async (req, res) => {
    console.log("In Controller");
    try {
      const filters = new SessionRequestDto(req.query);
      const logs = await this.service.getSessionLogs(filters.name);

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
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message || "Unable to fetch session logs",
      });
    }
  };

}

module.exports = SessionController;
