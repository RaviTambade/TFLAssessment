/**
 * User Profile Service
 * Contains business logic for user profile operations
 * SOLID Principles:
 *   - Single Responsibility: Only handles business logic for profiles
 *   - Dependency Inversion: Depends on UserProfileRepository abstraction
 *   - Open/Closed: Can be extended for new business logic
 * OOPS Concepts: Encapsulation, Polymorphism
 */

class UserProfileService {
  
  constructor(repository) {
    this.repository = repository;
  }

    getUserProfileById(userId, callback) {  
    this.repository.getUserProfileById(userId, callback);
  }

  /**
   * Format user profile response
   * @param {Array} userProfile - Raw user profile data from database
   * @returns {Object} Formatted response
   */
  formatUserProfileResponse(userProfile) {
    if (!userProfile) {
      return {
        success: false,
        message: "User profile not found",
        data: null,
      };
    }

    // Normalize nested result sets from MySQL stored procedures, e.g. [[row1, ...], ...]
    let rows = userProfile;

    if (Array.isArray(userProfile) && userProfile.length > 0 && Array.isArray(userProfile[0])) {
      rows = userProfile[0];
    }

    if (!rows || rows.length === 0) {
      return {
        success: false,
        message: "User profile not found",
        data: null,
      };
    }

    const profile = rows[0];

    return {
      success: true,
      message: "User profile retrieved successfully",
      data: {
        userId: profile.userId,
        contact: profile.contact,
        status: profile.status,
        personalInformation: {
          firstName: profile.first_name,
          lastName: profile.last_name,
          gender: profile.gender,
          dateOfBirth: profile.date_of_birth,
          email: profile.email,
        },
        academicInformation: {
          
          enrollmentYear: profile.enrollment_year,
          passingYear: profile.passing_year,
          percentage: profile.percentage,
          collegeName: profile.college_name,
        },
        professionalInformation: {
          skills: profile.skills,
        },
      },
    };
  }
}
  module.exports = UserProfileService;