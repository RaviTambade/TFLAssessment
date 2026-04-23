const LoginStatsResponseDto = require("../dtos/responses/loggerlogin-statsresponsedto");
const AvgSessionResponseDto = require("../dtos/responses/loggeravg-sessionresponsedto");
const ActiveSessionsResponseDto = require("../dtos/responses/loggeractive-sessionsresponsedto");
const ActiveUsersResponseDto = require("../dtos/responses/loggeractive-usersresponsedto");
const SessionRequestDto = require("../dtos/requests/sessionrequestdto");

class UserActivityController {
  
  constructor(loggerService) {
    this.service = loggerService;
  }

  sendSuccess(res, data, statusCode = 200, message = null) {
    const response = { success: true, data };
    if (message) response.message = message;
    return res.status(statusCode).json(response);
  }

  
  sendError(res, message, statusCode = 500, error = null) {
    if (error) {
      console.error(`[Logger Error] ${message}:`, error);
    }
    return res.status(statusCode).json({ success: false, error: message });
  }

  createServiceCallback(res, handler) {
    return (error, data) => {
      if (error) {
        return this.sendError(res, error.message || "Operation failed", 500, error);
      }
      return handler(data, res);
    };
  }

  
  loginEntry = (req, res) => {
    const userId = req.params.userId;

    if (!userId) {
      return this.sendError(res, "User ID is required", 400);
    }

    const callback = this.createServiceCallback(res, (result, response) => {
      if (result.affectedRows > 0) {
        return this.sendSuccess(response, result, 201, "Login entry recorded successfully");
      }
      return this.sendError(response, "Failed to record login entry", 400);
    });

    this.service.loginEntry(userId, callback);
  };

  
  logoutEntry = (req, res) => {
    const userId = req.params.userId;

    if (!userId) {
      return this.sendError(res, "User ID is required", 400);
    }

    const callback = this.createServiceCallback(res, (result, response) => {
      if (result.affectedRows > 0) {
        return this.sendSuccess(response, result, 201, "Logout entry recorded successfully");
      }
      return this.sendError(response, "Failed to record logout entry", 400);
    });

    this.service.logoutEntry(userId, callback);
  };

  
  getLoginReportIn24Hours = (req, res) => {
    const callback = this.createServiceCallback(res, (data, response) => {
      const loginStats = {
        totalLogins24Hours: data?.totalLogins24Hours || 0,
        timestamp: new Date().toISOString()
      };
      return this.sendSuccess(response, loginStats, 200, "Login statistics retrieved");
    });

    this.service.getLoginReportIn24Hours(callback);
  };


  getAverageSessionTime = (req, res) => {
    const callback = this.createServiceCallback(res, (data, response) => {
      const sessionStats = new AvgSessionResponseDto(data);
      return this.sendSuccess(response, sessionStats, 200, "Average session time retrieved");
    });

    this.service.getAverageSessionTime(callback);
  };


  getActiveSessions = (req, res) => {
    const callback = this.createServiceCallback(res, (data, response) => {
      const activeSessions = {
        totalActiveSessions: data?.activeSessions || 0,
        timestamp: new Date().toISOString()
      };
      return this.sendSuccess(response, activeSessions, 200, "Active sessions retrieved");
    });

    this.service.getActiveSessions(callback);
  };

  getActiveUsers = (req, res) => {
    const callback = this.createServiceCallback(res, (data, response) => {
      const formattedUsers = data.map(user => ({
        userId: user.user_id || user.userId,
        fullName: user.full_name || user.fullName,
        loginTime: user.login_time || user.loginTime,
        status: "ACTIVE"
      }));

      return this.sendSuccess(response, formattedUsers, 200, "Active users retrieved");
    });

    this.service.getActiveUsers(callback);
  };


  getSessionLogs = (req, res) => {
    const sessionFilters = new SessionRequestDto(req.query);

    if (!sessionFilters.userName) {
      return this.sendError(res, "User name filter is required", 400);
    }

    const callback = this.createServiceCallback(res, (logs, response) => {
      if (!logs || logs.length === 0) {
        return this.sendError(response, "No session logs found for the specified criteria", 404);
      }

      return this.sendSuccess(response, logs, 200, "Session logs retrieved successfully");
    });

    this.service.getSessionLogs(sessionFilters.userName, callback);
  };

}

module.exports = UserActivityController;  