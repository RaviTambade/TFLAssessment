/**
 * Admin Profile Controller
 * Handles HTTP requests and responses for admin profile operations
 * SOLID Principles:
 *   - Single Responsibility: Only handles HTTP layer concerns
 *   - Dependency Inversion: Depends on AdminProfileService abstraction
 * OOPS Concepts: Encapsulation, Abstraction
 */

class AdminProfileController {
  /**
   * Constructor with dependency injection
   * @param {AdminProfileService} service - Injected service instance
   */
  constructor(service) {
    if (!service) {
      throw new Error("AdminProfileService is required");
    }
    this.service = service;
  }

  /**
   * GET /admin-profiles/:id
   * Retrieve admin profile by user ID
   * @param {Request} req - Express request object
   * @param {Response} res - Express response object
   */
  getAdminProfile(req, res) {
    try {
      const userId = parseInt(req.params.id, 10);

      // Validation: Check if userId is valid
      if (!userId || isNaN(userId)) {
        return res.status(400).json({
          success: false,
          message: "User ID must be a valid positive integer",
          statusCode: 400,
        });
      }

      // Call service layer
      this.service.getAdminProfile(userId, (error, profile) => {
        // Handle service errors
        if (error) {
          console.error(`Error fetching admin profile for user ${userId}:`, error.message);
          return res.status(500).json({
            success: false,
            message: error.message || "Error retrieving admin profile",
            statusCode: 500,
          });
        }

        // Handle not found
        if (!profile) {
          return res.status(404).json({
            success: false,
            message: "Admin profile not found",
            statusCode: 404,
          });
        }

        // Success response
        return res.status(200).json({
          success: true,
          message: "Admin profile retrieved successfully",
          data: profile,
          statusCode: 200,
        });
      });
    } catch (error) {
      console.error("Unexpected error in getAdminProfile:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        statusCode: 500,
      });
    }
  }
}

module.exports = AdminProfileController;
