class SessionRequestDto {
  constructor(query) {
    this.name = query.name || null;
    this.page = parseInt(query.page) || 1;
    this.limit = parseInt(query.limit) || 10;
  }
}

module.exports = SessionRequestDto;
