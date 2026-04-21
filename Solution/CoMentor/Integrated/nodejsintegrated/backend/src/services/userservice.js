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

    const [resultSets] = await this.repo.getUserProfileById(Number(userId));

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

module.exports = UsersService;