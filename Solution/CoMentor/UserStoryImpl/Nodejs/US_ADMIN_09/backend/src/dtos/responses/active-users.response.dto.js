class ActiveUsersResponseDto {
  constructor(users) {
    return users.map(user => ({
      fullName: user.full_name,
      loginTime: user.login_time,
      activeSeconds: user.active_seconds,
      status: "ACTIVE"
    }));
  }
}

module.exports = ActiveUsersResponseDto;