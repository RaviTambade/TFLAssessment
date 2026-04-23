const ChangePasswordDto = require("../dtos/requests/changepassworddto");
const Credential = require("../dtos/requests/credential");
const UserRequest = require("../dtos/requests/userrequest");

class Auth {

  /**
   * Constructor with dependency injection for authService
   * @param {Object} authService - The authentication service instance
   */
  constructor(authService) {
    this.authService = authService;
  }

  // ==================== REUSABLE UTILITY FUNCTIONS ====================

  /**
   * Generic success response handler
   * Standardizes all success responses with consistent format
   * @param {Object} res - Express response object
   * @param {*} data - Response data
   * @param {number} statusCode - HTTP status code (default: 200)
   * @param {string} message - Optional success message
   */
  sendSuccess(res, data, statusCode = 200, message = null) {
    const response = { data };
    if (message) {
      response.message = message;
    }
    return res.status(statusCode).json(response);
  }

  /**
   * Generic error response handler
   * Standardizes all error responses with logging
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   * @param {number} statusCode - HTTP status code (default: 500)
   * @param {Error} error - Optional error object for logging
   */
  sendError(res, message, statusCode = 500, error = null) {
    if (error) {
      console.error(`[Auth Error] ${message}:`, error);
    }
    return res.status(statusCode).json({ error: message });
  }

  /**
   * Validate required fields in an object
   * Checks if all specified fields exist and are non-empty
   * @param {Object} obj - Object to validate
   * @param {Array<string>} requiredFields - Array of required field names
   * @returns {Object} - Validation result with isValid flag and message
   */
  validateRequired(obj, requiredFields) {
    const missingFields = requiredFields.filter(field => !obj[field]);
    
    if (missingFields.length > 0) {
      return {
        isValid: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      };
    }
    
    return { isValid: true };
  }

  /**
   * Generic callback handler factory for async service calls
   * Eliminates duplicate callback code across endpoints
   * @param {Object} res - Express response object
   * @param {string} successMessage - Success message
   * @param {string} errorMessage - Error message on failure
   * @param {Function} customHandler - Optional custom handler for result processing
   * @returns {Function} - Returns callback function for service
   */
  createServiceCallback(res, successMessage, errorMessage, customHandler = null) {
    return (err, result) => {
      if (err) {
        return this.sendError(res, errorMessage, 500, err);
      }

      if (customHandler) {
        return customHandler(result, res);
      }

      return this.sendSuccess(res, result, 200, successMessage);
    };
  }

  /**
   * Validate API response from service
   * Checks for successful result indicators
   * @param {Object} result - Result from service
   * @returns {boolean} - True if result is valid and successful
   */
  isValidResult(result) {
    return result && (result.status === true || (result.affectedRows && result.affectedRows > 0));
  }

  /**
   * Extract specific fields from request body
   * @param {Object} body - Request body
   * @param {Array<string>} fields - Field names to extract
   * @returns {Object} - Extracted data object
   */
  extractRequestData(body, fields) {
    const data = {};
    fields.forEach(field => {
      data[field] = body[field];
    });
    return data;
  }

  /**
   * Validate email format
   * @param {string} email - Email to validate
   * @returns {boolean} - True if email is valid
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Check password strength
   * @param {string} password - Password to check
   * @returns {Object} - Validation result with isValid flag and message
   */
  validatePassword(password) {
    if (!password || password.length < 8) {
      return {
        isValid: false,
        message: "Password must be at least 8 characters long",
      };
    }
    return { isValid: true };
  }

  // ==================== AUTH ENDPOINT HANDLERS ====================

  /**
   * Validate user credentials (Login)
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  validate = (req, res) => {
    // Extract request data
    const { username, password, role } = req.body;

    // Validate required fields
    const validation = this.validateRequired(
      { username, password, role },
      ["username", "password", "role"]
    );

    if (!validation.isValid) {
      return this.sendError(res, validation.message, 400);
    }

    // Create credential DTO
    const credential = new Credential(username, password, role);

    // Create custom handler for validation response
    const validationHandler = (result, response) => {
      if (result.status) {
        return this.sendSuccess(response, result, 200, "Validation successful");
      }
      return this.sendError(response, "Invalid credentials", 401);
    };

    // Call service with callback
    const callback = this.createServiceCallback(
      res,
      "User validated successfully",
      "Validation failed",
      validationHandler
    );

    this.authService.validate(credential, callback);
  };

  /**
   * Register new user
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  register = (req, res) => {
    // Extract request data
    const { firstName, lastName, email, password, contact } = req.body;

    // Validate required fields
    const validation = this.validateRequired(
      { firstName, lastName, email, password, contact },
      ["firstName", "lastName", "email", "password", "contact"]
    );

    if (!validation.isValid) {
      return this.sendError(res, validation.message, 400);
    }

    // Validate email format
    if (!this.isValidEmail(email)) {
      return this.sendError(res, "Invalid email format", 400);
    }

    // Validate password strength
    const passwordValidation = this.validatePassword(password);
    if (!passwordValidation.isValid) {
      return this.sendError(res, passwordValidation.message, 400);
    }

    // Create user request DTO
    const user = new UserRequest(firstName, lastName, email, password, contact);

    // Create custom handler for registration response
    const registrationHandler = (result, response) => {
      if (this.isValidResult(result)) {
        return this.sendSuccess(response, result, 201, "User registered successfully");
      }
      return this.sendError(response, "Registration failed", 400);
    };

    // Call service with callback
    const callback = this.createServiceCallback(
      res,
      "User registered successfully",
      "Registration failed",
      registrationHandler
    );

    this.authService.register(user, callback);
  };

  /**
   * Change user password
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  changePassword = (req, res) => {
    // Extract request data
    const { id, oldPassword, newPassword } = req.body;

    // Validate required fields
    const validation = this.validateRequired(
      { id, oldPassword, newPassword },
      ["id", "oldPassword", "newPassword"]
    );

    if (!validation.isValid) {
      return this.sendError(res, validation.message, 400);
    }

    // Validate new password strength
    const passwordValidation = this.validatePassword(newPassword);
    if (!passwordValidation.isValid) {
      return this.sendError(res, passwordValidation.message, 400);
    }

    // Prevent using same password as old password
    if (oldPassword === newPassword) {
      return this.sendError(res, "New password must be different from old password", 400);
    }

    // Create change password DTO
    const changePasswordDto = new ChangePasswordDto(id, oldPassword, newPassword);

    // Create custom handler for password change response
    const passwordChangeHandler = (result, response) => {
      if (result.affectedRows > 0) {
        return this.sendSuccess(response, result, 200, "Password changed successfully");
      }
      return this.sendError(response, "Failed to change password", 400);
    };

    // Call service with callback
    const callback = this.createServiceCallback(
      res,
      "Password changed successfully",
      "Failed to change password",
      passwordChangeHandler
    );

    this.authService.changePassword(changePasswordDto, callback);
  };
}

module.exports = Auth;
