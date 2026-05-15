class PaginationRequestDto {
  constructor(result = {}) {
    this.page = Number.isInteger(Number(result.page)) && Number(result.page) > 0 ? Number(result.page) : 1;
    this.limit = Number.isInteger(Number(result.limit)) && Number(result.limit) > 0 ? Number(result.limit) : 10;
  }
}

module.exports = PaginationRequestDto;