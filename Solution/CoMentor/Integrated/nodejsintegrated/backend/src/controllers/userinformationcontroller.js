class UserInformationController {
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
  getSMEProfile(req, res) {
    const userId = parseInt(req.params.id);
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }
    this.service.getSMEProfile(userId, (err, result) => {
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

  updateUserStatus(req, res) {
    const { id, status } = req.body;
    const userId = parseInt(id);

    if (!Number.isInteger(userId) || userId <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    this.service.updateUserStatus(userId, status, (err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "User status updated successfully",
        data: result,
      });
    });
  }
}

  



module.exports = UserInformationController;