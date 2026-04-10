/**
 * User Profile Controller
 * Handles HTTP requests and responses for user profile operations
 * SOLID Principles:
 *   - Single Responsibility: Only handles HTTP layer concerns
 *   - Dependency Inversion: Depends on UserProfileService abstraction
 * OOPS Concepts: Encapsulation, Abstraction
 */

class UserProfileController {
 
  constructor(service) {
    this.service = service;
  }
 
  getUserProfile(req, res) {
    const userId = req.params.id;

    // Call service with callback
    this.service.getUserProfileById(userId, (err, userProfile) => {
      if (err) {
        console.error(`Error fetching profile for user ${userId}:`, err.message);
        const statusCode = err.statusCode || 500;
        
        return res.status(statusCode).json({
          success: false,
          error: err.message,
          statusCode: statusCode,
        });
      }

      // Format response using service method
      const response = this.service.formatUserProfileResponse(userProfile);
      res.json(response);
    });
  }

}

module.exports = UserProfileController;
