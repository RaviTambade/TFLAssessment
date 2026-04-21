function sessionLogResponseDto(row) {
  return {
    sessionId: row.session_id,
    userId: row.user_id,
    fullName: row.full_name,
    role: row.role,
    loginTime: row.login_time,
    logoutTime: row.logout_time,
    sessionDurationMinutes: row.session_duration_minutes,
  };
}

module.exports = sessionLogResponseDto;
