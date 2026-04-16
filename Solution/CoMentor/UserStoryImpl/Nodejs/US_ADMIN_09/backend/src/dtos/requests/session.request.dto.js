class SessionRequestDto {
  constructor(query) {
    this.page = parseInt(query.page) || 1;
    this.limit = parseInt(query.limit) || 10;
  }
}

module.exports = SessionRequestDto;