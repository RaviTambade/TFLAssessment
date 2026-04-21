class EmployerProfileController {
  constructor(service) {
    this.service = service;
  }

  getEmployerProfile(req, res) {
    const userId = parseInt(req.params.id);
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }
    this.service.getEmployerProfile(userId, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message || "Server error",
        });
      }
      res.json({
        success: true,
        data: result
      });
    });
  }

  getAdminProfile(req, res) {
    const userId = parseInt(req.params.id);
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }
    this.service.getAdminProfile(userId, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message || "Server error",
        });
      }
      res.json({
        success: true,
        data: result
      });
    });
  }
}


module.exports = EmployerProfileController;