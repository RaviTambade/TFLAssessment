class SessionsController {
  constructor(service) {
    this.service = service;
  }

  getSessionLogs = (req, res) => {
    // The controller only coordinates HTTP request/response handling.
    this.service.getAllSessionLogs((err, logs) => {
      if (err) return res.status(500).json({ success: false, message: err.message || 'Unable to fetch session logs' });
      res.status(200).json({ success: true, data: logs });
    });
  };
}

module.exports = SessionsController;
