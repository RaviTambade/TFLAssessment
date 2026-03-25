class UserProfileService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async updateUserProfile(userData) {
    if (!userData || typeof userData !== 'object') {
      throw new Error('User data is required');
    }

    if (!userData.user_id) {
      throw new Error('User ID is required');
    }

    if (!userData.email) {
      throw new Error('Email is required');
    }

    const allowedRoles = ['MENTOR', 'ADMIN', 'STUDENT'];
    if (userData.role && !allowedRoles.includes(userData.role)) {
      throw new Error('Invalid user role');
    }

    const updateResult = await this.userRepository.updateUserProfile(userData);

    return {
      success: true,
      message: 'User profile updated successfully',
      data: updateResult,
    };
  }
}

module.exports = UserProfileService;
