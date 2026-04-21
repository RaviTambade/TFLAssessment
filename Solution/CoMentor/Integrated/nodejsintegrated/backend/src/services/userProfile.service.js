
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

    const result = await this.repository.getUserProfileById(Number(userId));

    if (!result) {
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
      data: UserProfileResponseDto.fromDbRow(result),
    };
  }
}

module.exports = UserProfileService;