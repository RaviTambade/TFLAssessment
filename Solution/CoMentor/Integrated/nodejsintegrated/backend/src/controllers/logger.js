const LoginStatsResponseDto = require("../dtos/responses/loggerlogin-statsresponsedto");
const AvgSessionResponseDto = require("../dtos/responses/loggeravg-sessionresponsedto");
const ActiveSessionsResponseDto = require("../dtos/responses/loggeractive-sessionsresponsedto");
const ActiveUsersResponseDto = require("../dtos/responses/loggeractive-usersresponsedto");
const SessionRequestDto = require("../dtos/requests/sessionrequestdto");

/**
 * Logger Controller
 * Handles all logging-related HTTP requests and responses
 * Naming conventions:
 * - camelCase for method names (loginEntry, getActiveSessions)
 * - camelCase for parameters (userId, sessionId)
 * - Full words instead of abbreviations (getAverageSessionTime not getAvgSessionTime)
 * - Verb + Noun pattern (getActiveSessions, insertLoginEntry, updateSessionLog)
 */
class Logger {
  
  /**
   * Constructor with dependency injection
   * @param {Object} loggerService - Logger service instance for database operations
   */
  constructor(loggerService) {
    this.service = loggerService;
  }

  // ==================== REUSABLE UTILITY METHODS ====================

  /**
   * Send standardized success response
   * @param {Object} res - Express response object
   * @param {*} data - Response payload
   * @param {number} statusCode - HTTP status code (default: 200)
   * @param {string} message - Success message (optional)
   */
  sendSuccess(res, data, statusCode = 200, message = null) {
    const response = { success: true, data };
    if (message) response.message = message;
    return res.status(statusCode).json(response);
  }

  /**
   * Send standardized error response
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   * @param {number} statusCode - HTTP status code (default: 500)
   * @param {Error} error - Error object for logging (optional)
   */
  sendError(res, message, statusCode = 500, error = null) {
    if (error) {
      console.error(`[Logger Error] ${message}:`, error);
    }
    return res.status(statusCode).json({ success: false, error: message });
  }

  /**
   * Generic callback handler for service calls
   * Eliminates duplicate error handling code
   * @param {Object} res - Express response object
   * @param {Function} handler - Custom handler for processing results
   * @returns {Function} - Callback function for service
   */
  createServiceCallback(res, handler) {
    return (error, data) => {
      if (error) {
        return this.sendError(res, error.message || "Operation failed", 500, error);
      }
      return handler(data, res);
    };
  }

  // ==================== LOGIN/LOGOUT OPERATIONS ====================

  /**
   * Record user login entry in database
   * @param {Object} req - Express request object with userId in params
   * @param {Object} res - Express response object
   * Example: POST /logs/login/:userId
   */
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

  /**
   * Record user logout entry in database
   * @param {Object} req - Express request object with userId in params
   * @param {Object} res - Express response object
   * Example: POST /logs/logout/:userId
   */
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

  // ==================== STATISTICS & ANALYTICS OPERATIONS ====================

  /**
   * Get login statistics for the last 24 hours
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * Example: GET /logs/statistics/logins-24h
   */
  getLoginStatsLast24Hours = (req, res) => {
    const callback = this.createServiceCallback(res, (data, response) => {
      const loginStats = {
        totalLogins24Hours: data?.totalLogins24Hours || 0,
        timestamp: new Date().toISOString()
      };
      return this.sendSuccess(response, loginStats, 200, "Login statistics retrieved");
    });

    this.service.getLoginStatistics(callback);
  };

  /**
   * Get average session duration time across all users
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * Example: GET /logs/statistics/average-session-time
   */
  getAverageSessionTime = (req, res) => {
    const callback = this.createServiceCallback(res, (data, response) => {
      const sessionStats = new AvgSessionResponseDto(data);
      return this.sendSuccess(response, sessionStats, 200, "Average session time retrieved");
    });

    this.service.getAverageSessionTime(callback);
  };

  /**
   * Get total number of currently active sessions
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * Example: GET /logs/statistics/active-sessions
   */
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

  /**
   * Get list of currently active users with their login information
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * Example: GET /logs/users/active
   */
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

  // ==================== SESSION LOG OPERATIONS ====================

  /**
   * Retrieve filtered session logs by user or other criteria
   * @param {Object} req - Express request object with query parameters
   * @param {Object} res - Express response object
   * Query parameters: ?userName=value&filters=...
   * Example: GET /logs/sessions?userName=john
   */
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

module.exports = Logger;  