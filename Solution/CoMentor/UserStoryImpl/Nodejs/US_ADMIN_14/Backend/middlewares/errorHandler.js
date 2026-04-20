function errorHandler(err, req, res, next) {
  console.error(err);

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    error: {
      message,
    },
  });
}

module.exports = errorHandler;
