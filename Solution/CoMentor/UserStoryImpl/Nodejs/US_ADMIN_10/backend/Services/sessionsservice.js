class SessionsService { //class name called SessionsService
  constructor(repository) { //constructor takes repository as an argument and saves it to use repository methods
    this.repository = repository;//service call repo functions
  }

  getAllSessionLogs(name, callback) {//function where name searches users and a callback function used to send result to controller
    this.repository.getAllSessionLogs(name, (err, rows) => { //calls repository function which talks to database, name to filter using name and callback to send result back to controller
      if (err) return callback(err);//sends error to controller

      // Convert database column names into API response field names.
      const formatted = rows.map(r => ({
        sessionId: r.session_id,
        userId: r.user_id,
        fullName: r.full_name,
        role: r.role,
        loginTime: r.login_time,
        logoutTime: r.logout_time,
        sessionDurationMinutes: r.session_duration_minutes
      }));

      callback(null, formatted);//sends formatted result to controller, null for error since there is no error
    });
  }
}

module.exports = SessionsService;
