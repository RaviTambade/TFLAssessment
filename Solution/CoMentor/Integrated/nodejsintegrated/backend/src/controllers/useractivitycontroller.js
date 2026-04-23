const LoginStatsResponseDto = require("../dtos/responses/loggerlogin-statsresponsedto");
const AvgSessionResponseDto = require("../dtos/responses/loggeravg-sessionresponsedto");
const ActiveSessionsResponseDto = require("../dtos/responses/loggeractive-sessionsresponsedto");
const ActiveUsersResponseDto = require("../dtos/responses/loggeractive-usersresponsedto");
const UserActivityRequestDto = require("../dtos/requests/useractivityrequestdto");
const ResponseGenerator = require("../helpers/ResponseGenerator");
class UserActivityController {
  constructor(userActivityService) {
    this.service = userActivityService;
  }

  login = (req, res) => {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    if (!userId) {
      return this.sendError(res, "User ID is required", 400);
    }

    this.service.login(userId, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Invalid credentials",
        "Validation successful",
      );
    });
  };

  logout = (req, res) => {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    if (!userId) {
      return this.sendError(res, "User ID is required", 400);
    }

    this.service.logout(userId, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to record logout entry",
        "Logout entry recorded successfully",
      );
    });
  };

  getTotalLogins24Hours = (req, res) => {
    const responseGenerator = new ResponseGenerator();

    this.service.getTotalLogins24Hours((err, result) => {
      const loginStats = {
        totalLogins24Hours: result?.totalLogins24Hours || 0,
        timestamp: new Date().toISOString(),
      };
      responseGenerator.generateResponse(
        res,
        err,
        loginStats,
        "Failed to retrieved Login statistics",
        "Login statistics retrieved",
      );
    });
  };

  getRecentAverageSessionTime = (req, res) => {
    const responseGenerator = new ResponseGenerator();

    this.service.getRecentAverageSessionTime((err, result) => {
      const sessionStats = new AvgSessionResponseDto(result);
      responseGenerator.generateResponse(
        res,
        err,
        sessionStats,
        "Failed to retrieved Average session time",
        "Average session time retrieved",
      );
    });
  };

  getTotalActiveSessions = (req, res) => {
    const responseGenerator = new ResponseGenerator();

    this.service.getTotalActiveSessions((err, result) => {
      const activeSessions = {
        totalActiveSessions: result?.activeSessions || 0,
        timestamp: new Date().toISOString(),
      };
      responseGenerator.generateResponse(
        res,
        err,
        activeSessions,
        "Failed to retrieved total Active sessions ",
        "total Active sessions retrieved",
      );
    });
  };

  getCurrentActiveUsers = (req, res) => {
    const responseGenerator = new ResponseGenerator();

    this.service.getCurrentActiveUsers((err, result) => {

      const formattedUsers = result.map((user) => ({
        userId: user.user_id || user.userId,
        fullName: user.full_name || user.fullName,
        loginTime: user.login_time || user.loginTime,
        status: "ACTIVE",
      }));

      responseGenerator.generateResponse(
        res,
        err,
        formattedUsers,
        "Failed to retrieved Active users ",
        " Active user retrieved",
      );
    });
  };

  getAllUserActivity = (req, res) => {
    const responseGenerator = new ResponseGenerator();

    const sessionFilters = new UserActivityRequestDto(req.query);

    if (!sessionFilters.name) {
      return responseGenerator.sendError(res, "User name filter is required", 400);
    }

    // const callback = this.createServiceCallback(res, (logs, response) => {
    //   if (!logs || logs.length === 0) {
    //     return this.sendError(
    //       response,
    //       "No session logs found for the specified criteria",
    //       404,
    //     );
    //   }

      // return this.sendSuccess(
      //   response,
      //   logs,
      //   200,
      //   "Session logs retrieved successfully",
      // );
    // });

    this.service.getAllUserActivity(sessionFilters.name, (err, result) => {

      responseGenerator.generateResponse(
        res,
        err,
        result,
        "No session logs found for the specified criteria",
        "Session logs retrieved successfully",
      );
    });
  };
}

module.exports = UserActivityController;
