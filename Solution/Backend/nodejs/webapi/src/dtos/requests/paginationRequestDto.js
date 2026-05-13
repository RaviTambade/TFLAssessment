class PaginationRequestDto {
  constructor(query = {}) {
    this.page = Number.isInteger(Number(query.page)) && Number(query.page) > 0 ? Number(query.page) : 1;
    this.limit = Number.isInteger(Number(query.limit)) && Number(query.limit) > 0 ? Number(query.limit) : 10;
  }
}

module.exports = PaginationRequestDto;