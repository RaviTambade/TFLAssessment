const sessionFilterRequestDto = require("../dtos/requests/sessionFilterRequest.dto");

class SessionController {
  constructor(sessionService) {
    this.sessionService = sessionService;
  }

  getSessionLogs = (req, res) => {
    const filters = sessionFilterRequestDto(req.query);

    this.sessionService.getSessionLogs(filters.name, (err, logs) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message || "Unable to fetch session logs",
        });
      }

      if (filters.name && logs.length === 0) {
        return res.status(404).json({
          success: false,
          message: "NOT FOUND",
        });
      }

      res.status(200).json({
        success: true,
        data: logs,
      });
    });
  };
}

module.exports = SessionController;
