/**
 * User Profile Service
 * Contains business logic for user profile operations
 * SOLID Principles:
 *   - Single Responsibility: Only handles business logic for profiles
 *   - Dependency Inversion: Depends on UserProfileRepository abstraction
 *   - Open/Closed: Can be extended for new business logic
 * OOPS Concepts: Encapsulation, Polymorphism
 */

const UserProfileResponseDto = require("../dtos/responses/userProfileResponseDto");

class UserProfileService {
  constructor(repository) {
    this.repository = repository;
  }

  async getUserProfileById(userId) {
    if (!userId || Number.isNaN(Number(userId))) {
      return {
        success: false,
        message: "Invalid user id provided",
        statusCode: 400,
        data: null,
      };
    }

    const [resultSets] = await this.repository.getUserProfileById(Number(userId));

    let rows = resultSets;
    if (Array.isArray(resultSets) && Array.isArray(resultSets[0])) {
      rows = resultSets[0];
    }

    if (!rows || rows.length === 0) {
      return {
        success: false,
        message: "User profile not found",
        statusCode: 404,
        data: null,
      };
    }

    return {
      success: true,
      message: "User profile retrieved successfully",
      data: UserProfileResponseDto.fromDbRow(rows[0]),
    };
  }
}

module.exports = UserProfileService;