class ErrorResponse {
  constructor(message) {
    this.error = { message };
  }
}

module.exports = ErrorResponse;