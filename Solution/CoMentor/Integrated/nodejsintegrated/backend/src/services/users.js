/**
 * User Service
 * Business logic layer for user operations
 * SOLID Principle: Single Responsibility - Contains only business logic
 */

class UserService {

  constructor(repo) {
    this.repo = repo;
  }

  /**
   * Get complete user information by ID
   * Async method - returns promise-based response
   */
  async getUserInformationById(userId) {
    if (!userId || Number.isNaN(Number(userId))) {
      return {
        success: false,
        message: "Invalid user id provided",
        statusCode: 400,
        data: null,
      };
    }

    try {
      const result = await this.repo.getUserInformationById(Number(userId));

      if (!result) {
        return {
          success: false,
          message: "User information not found",
          statusCode: 404,
          data: null,
        };
      }

      return {
        success: true,
        message: "User information retrieved successfully",
        statusCode: 200,
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        message: "Error retrieving user information",
        statusCode: 500,
        data: null,
        error: error.message,
      };
    }
  }

  /**
   * Get user name by ID
   * Callback-based method
   */
  getUserName(userNameRequest, callback) {
    this.repo.getUserName(userNameRequest, callback);
  }

 getUserCompleteInformation(userId, callback) {
    this.repo.getUserCompleteInformation(userId, callback);
  }

getUserPersonalInformation(userId, callback) {
    this.repo.getUserPersonalInformation(userId, callback);
  }

  getUserAcademicInformation(userId, callback) {
    this.repo.getUserAcademicInformation(userId, callback);
  }

  getUserProfessionalInformation(userId, callback) {
    this.repo.getUserProfessionalInformation(userId, callback);
  }


  updateCompleteUserInformation(userId, data, callback) {
    this.repo.updateCompleteUserInformation(userId, data, callback);
  }


  updatePersonalInformation(userId, data, callback) {
    this.repo.updatePersonalInformation(userId, data, callback);
  }

  /**
   * Update only professional information
   */
  updateProfessionalInformation(userId, data, callback) {
    this.repo.updateProfessionalInformation(userId, data, callback);
  }

  /**
   * Update only academic information
   */
  updateAcademicInformation(userId, data, callback) {
    this.repo.updateAcademicInformation(userId, data, callback);
  }

  /**
   * Update user status (ACTIVE, INACTIVE, BLOCKED)
   * Includes validation for allowed statuses
   */
  updateUserStatus(userId, status, callback) {
    const ALLOWED_STATUSES = ["ACTIVE", "INACTIVE", "BLOCKED"];

    if (!userId || Number.isNaN(Number(userId))) {
      return callback(new Error("Invalid user ID"), null);
    }

    const normalizedStatus = typeof status === "string" ? status.trim().toUpperCase() : "";

    if (!normalizedStatus) {
      return callback(new Error("Status is required"), null);
    }

    if (!ALLOWED_STATUSES.includes(normalizedStatus)) {
      return callback(
        new Error("Status must be one of: ACTIVE, INACTIVE, or BLOCKED"),
        null
      );
    }

    this.repo.updateUserStatus(userId, normalizedStatus, (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }



}

module.exports = UserService;