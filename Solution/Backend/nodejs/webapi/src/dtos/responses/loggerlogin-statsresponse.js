class LoginStatsResponseDto {
  constructor(data) {
    this.totalLoginsLast24Hours = data?.totalLogins24h || 0;
  }
}

module.exports = LoginStatsResponseDto;