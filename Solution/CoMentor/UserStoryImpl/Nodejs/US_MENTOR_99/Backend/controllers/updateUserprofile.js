class UserController {
  constructor(userService) {
    this.userService = userService;
    this.updateUserProfile = this.updateUserProfile.bind(this);
  }

  async updateUserProfile(req, res) {
    try {
      const userData = req.body;
      const result = await this.userService.updateUserProfile(userData);

      if (!result.success) {
        return res.status(400).json(result);
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message || 'Internal Server Error',
      });
    }
  }
}

module.exports = UserController;


