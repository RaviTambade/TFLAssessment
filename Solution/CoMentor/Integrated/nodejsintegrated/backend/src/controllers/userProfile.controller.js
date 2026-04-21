
class UserProfileController {
  constructor(service) {
    this.service = service;
  }

  async getUserProfile(req, res, next) {
    const userId = req.params.id;

    try {
      const response = await this.service.getUserProfileById(userId);
      if (!response.success) {
        return res.status(response.statusCode || 404).json(response);
      }

      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserProfileController;
