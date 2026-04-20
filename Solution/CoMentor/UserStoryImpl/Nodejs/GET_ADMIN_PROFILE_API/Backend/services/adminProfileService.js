/**
 * Admin Profile Service
 * Contains business logic for admin profile operations
 * SOLID Principles:
 *   - Single Responsibility: Handles only admin profile business logic
 *   - Dependency Inversion: Depends on AdminProfileRepository abstraction
 *   - Open/Closed: Can be extended for new business logic
 */

class AdminProfileService {
  /**
   * Constructor with Dependency Injection
   * @param {AdminProfileRepository} repository - Injected repository instance
   */
  constructor(repository) {
    if (!repository) {
      throw new Error("AdminProfileRepository is required");
    }
    this.repository = repository;
  }

  /**
   * Retrieve admin profile by user ID
   * @param {number} userId - Admin user ID
   * @param {Function} callback - Callback function (err, profile)
   * @returns {void}
   */
  getAdminProfile(userId, callback) {
    if (!userId) {
      return callback(new Error("User ID is required"), null);
    }

    return this.repository.getAdminProfile(userId, callback);
  }
}

module.exports = AdminProfileService;
