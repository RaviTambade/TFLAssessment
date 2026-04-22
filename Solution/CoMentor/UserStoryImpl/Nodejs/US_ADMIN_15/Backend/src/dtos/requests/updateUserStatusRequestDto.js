const ALLOWED_STATUSES = ["ACTIVE", "INACTIVE", "BLOCKED"];

class UpdateUserStatusRequestDto {
  constructor(body = {}) {
    this.id = Number(body.id);
    this.status = typeof body.status === "string" ? body.status.trim().toUpperCase() : "";
  }

  validate() {
    const errors = [];

    if (!Number.isInteger(this.id) || this.id <= 0) {
      errors.push("'id' must be a positive integer.");
    }

    if (!this.status) {
      errors.push("'status' is required.");
    } else if (!ALLOWED_STATUSES.includes(this.status)) {
      errors.push("'status' must be one of ACTIVE, INACTIVE, or BLOCKED.");
    }

    return errors;
  }

  toServicePayload() {
    return {
      id: this.id,
      status: this.status,
    };
  }
}

module.exports = UpdateUserStatusRequestDto;
