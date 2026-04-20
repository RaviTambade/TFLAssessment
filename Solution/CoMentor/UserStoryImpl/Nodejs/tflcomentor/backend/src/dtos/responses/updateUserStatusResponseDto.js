class UpdateUserStatusResponseDto {
  static success(result) {
    return {
      message: "User status updated successfully.",
      affectedRows: result && typeof result.affectedRows === "number" ? result.affectedRows : 0,
    };
  }

  static validationError(errors) {
    return {
      error: "Invalid request payload.",
      details: errors,
    };
  }

  static serverError(error) {
    return {
      error: "Failed to update user status.",
      details: error && error.message ? error.message : error,
    };
  }
}

module.exports = UpdateUserStatusResponseDto;
