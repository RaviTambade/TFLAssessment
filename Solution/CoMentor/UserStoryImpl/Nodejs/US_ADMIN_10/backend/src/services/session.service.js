const sessionLogResponseDto = require("../dtos/responses/sessionLogResponse.dto");

class SessionService {
  constructor(sessionRepository) {
    this.sessionRepository = sessionRepository;
  }

  getSessionLogs(name, callback) {
    this.sessionRepository.getSessionLogs(name, (err, rows) => {
      if (err) return callback(err);

      const formatted = rows.map(sessionLogResponseDto);
      callback(null, formatted);
    });
  }
}

module.exports = SessionService;
