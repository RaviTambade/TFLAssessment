const AvgSessionResponseDto = require("../dtos/responses/loggeravg-sessionresponse");
const ResponseGenerator = require("../helpers/responseGenerator");
const UserActivityRequestDto = require("../dtos/requests/useractivityrequest");

class UserActivityController {
  constructor(userActivityService) {
    this.service = userActivityService;
  }

  login(req, res) {
    const userId = req.params.userId;
    const roleId = req.params.roleId;

    const responseGenerator = new ResponseGenerator();

    if (!userId) {
      return this.sendError(res, "User ID is required", 400);
    }

    if (!roleId) {
      return this.sendError(res, "Role ID is required", 400);
    }

    this.service.login(userId, roleId, (err, result) => {
      const successMessage = "Validation successful";
      const errorMessage = "Invalid credentials";

      responseGenerator.generateResponse(res, err, result, errorMessage, successMessage);
    });
  }

  logout(req, res) {
    const userId = req.params.userId;
    const roleId = req.params.roleId;

    const responseGenerator = new ResponseGenerator();

    if (!userId) {
      return this.sendError(res, "User ID is required", 400);
    }

    if (!roleId) {
      return this.sendError(res, "Role ID is required", 400);
    }

    this.service.logout(userId, roleId, (err, result) => {
      const successMessage = "Logout entry recorded successfully";
      const errorMessage = "Failed to record logout entry";

      responseGenerator.generateResponse(res, err, result, errorMessage, successMessage);
    });
  }

  getRecentLoginCount(req, res) {
    const responseGenerator = new ResponseGenerator();

    this.service.getRecentLoginCount((err, result) => {
      const loginStats = {
        totalLogins24Hours: result?.totalLogins24h || 0,
        timestamp: new Date().toISOString(),
      };

      const successMessage = "Login statistics retrieved";
      const errorMessage = "Failed to retrieve login statistics";

      responseGenerator.generateResponse(res, err, loginStats, errorMessage, successMessage);
    });
  }

  getRecentAverageSessionTime(req, res) {
    const responseGenerator = new ResponseGenerator();

    this.service.getRecentAverageSessionTime((err, result) => {
      const sessionStats = new AvgSessionResponseDto(result);

      const successMessage = "Average session time retrieved";
      const errorMessage = "Failed to retrieve average session time";

      responseGenerator.generateResponse(res, err, sessionStats, errorMessage, successMessage);
    });
  }

  getActiveSessionsCount(req, res) {
    const responseGenerator = new ResponseGenerator();

    this.service.getActiveSessionsCount((err, result) => {
      const activeSessions = {
        totalActiveSessions: result?.activeSessions || 0,
        timestamp: new Date().toISOString(),
      };

      const successMessage = "Total active sessions retrieved";
      const errorMessage = "Failed to retrieve total active sessions";

      responseGenerator.generateResponse(res, err, activeSessions, errorMessage, successMessage);
    });
  }

  getLiveUsers(req, res) {
    const responseGenerator = new ResponseGenerator();

    this.service.getLiveUsers((err, result) => {
      const formattedUsers = result.map((user) => ({
        userId: user.user_id || user.userId,
        fullName: user.full_name || user.fullName,
        loginTime: user.login_time || user.loginTime,
        status: "ACTIVE",
      }));

      const successMessage = "Active users retrieved";
      const errorMessage = "Failed to retrieve active users";

      responseGenerator.generateResponse(res, err, formattedUsers, errorMessage, successMessage);
    });
  }

  getAllUserActivity(req, res) {
    const responseGenerator = new ResponseGenerator();

    const sessionFilters = new UserActivityRequestDto(req.query);

    this.service.getAllUserActivity(sessionFilters.name, (err, result) => {
      const successMessage = "Session logs retrieved successfully";
      const errorMessage = "No session logs found for the specified criteria";

      responseGenerator.generateResponse(res, err, result, errorMessage, successMessage);
    });
  }
}

module.exports = UserActivityController;