class ActiveSessionsResponseDto {
  constructor(data) {
    this.activeSessions = data?.activeSessions || 0;
  }
}

module.exports = ActiveSessionsResponseDto;