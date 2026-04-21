module.exports = (err, req, res, next) => {
  console.error("Error:", err);

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      success: false,
      error: 'Invalid JSON in request body',
      message: err.message,
      statusCode: 400,
    });
  }

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: err.message || 'Internal server error',
    statusCode,
  });
};