class SessionsService {
  constructor(repository) {
    this.repository = repository;
  }

  getAllSessionLogs(callback) {
    this.repository.getAllSessionLogs((err, rows) => {
      if (err) return callback(err);

      // Convert database column names into API response field names.
      const formatted = rows.map(r => ({
        sessionId: r.session_id,
        userId: r.user_id,
        role: r.role,
        loginTime: r.login_time,
        logoutTime: r.logout_time,
        sessionDurationMinutes: r.session_duration_minutes
      }));

      callback(null, formatted);
    });
  }
}

module.exports = SessionsService;
