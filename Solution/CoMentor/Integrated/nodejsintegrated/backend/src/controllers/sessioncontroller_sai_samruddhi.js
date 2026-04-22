

//Samruddhi
// const SessionRequestDto = require("../dtos/requests/sessionrequestdto");

class SessionController {
  constructor(service) {
    this.service = service;
  }

  

  //Samruddhi
  getSessionLogs = async (req, res) => {
    console.log("In Controller");
    try {
      const filters = new SessionRequestDto(req.query);
      const logs = await this.service.getSessionLogs(filters.name);

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
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message || "Unable to fetch session logs",
      });
    }
  };

}

module.exports = SessionController;
