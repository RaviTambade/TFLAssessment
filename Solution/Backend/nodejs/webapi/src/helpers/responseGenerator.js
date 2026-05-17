class ResponseGenerator {

  sendSuccess(res, data, statusCode = 200, message = null) {
    const response = { success: true, data };
    if (message) response.message = message;
    return res.status(statusCode).json(response);
  }

  sendError(res, message, statusCode = 500, error = null) {
    if (error) {
      console.error(`[ Error] ${message}:`, error);
    }
    return res.status(statusCode).json({ success: false, error: message });
  }


  generateResponse(res, err, result, errorMessage, successMessage) {
    
    if (err) {
      return this.sendError(res, errorMessage, 500, err);
    }

    if (result?.affectedRows !== undefined) {
      return result.affectedRows > 0
        ? this.sendSuccess(res, result, 200, successMessage)
        : this.sendError(res, errorMessage, 400, err);
    }

    if (Array.isArray(result)) {
      return result.length > 0
        ? this.sendSuccess(res, result, 200, successMessage)
        : this.sendError(res, "No data found", 404, err);
    }

    return this.sendSuccess(res, result, 200, successMessage);
  }
}

module.exports = ResponseGenerator;
