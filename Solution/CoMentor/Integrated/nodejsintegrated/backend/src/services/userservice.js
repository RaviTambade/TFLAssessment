class UsersService {

  constructor(repo) {
    this.repo = repo;
  }

  deleteUser(id, status, callback) {
    this.repo.deleteUser(id, status, callback);
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

module.exports = UsersService;