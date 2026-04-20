class EmployerProfileController {

  constructor(service) {
    this.service = service;
  }

  getEmployerProfile(req, res) {
    const userId = parseInt(req.params.id, 10);

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    this.service.getEmployerProfile(userId, (err, result) => {
      if (err) {
        if (err.message === "Access denied: User is not an Employer") {
          return res.status(403).json({
            success: false,
            message: err.message
          });
        }

        if (err.message === "Profile not found") {
          return res.status(404).json({
            success: false,
            message: err.message
          });
        }

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