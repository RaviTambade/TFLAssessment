class AdminProfileController {
  constructor(service) {
    this.service = service;
  }

  getAdminProfile(req, res) {
    const userId = parseInt(req.params.userId);

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    this.service.getAdminProfile(userId, (error, data) => {
      if (error) return res.status(500).json(error);
      if (!data) {
        return res.status(404).json({
          success: false,
          message: "Admin profile not found",
        });
      }

      res.status(200).json({
        success: true,
        data,
      });
    });
  }
}

module.exports = AdminProfileController;
